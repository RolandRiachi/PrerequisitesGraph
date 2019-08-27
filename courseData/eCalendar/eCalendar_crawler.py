import requests
import re
import json

def links_to_courses(start):
    '''
    Returns a list of links to all McGill eCalendar course pages of a given academic unit
    start - Initial webpage where the crawl begins
    '''

    #Initialize resultant list, page index, regex, requests session
    results = []
    page_index = 1
    regex_courses = re.compile(r'<a href="(/study/2019-2020/courses/\w{4}-.*?)">.*?</a>')
    regex_next_page = re.compile(r'<li class="pager-next"><a href="(.*?)">')
    with requests.Session() as s:
        #Get URL
        r = s.get(start)

        #Get courses on the page
        courses_on_page = re.findall(regex_courses, str(r.content))
        while courses_on_page != []:
            #Add courses to result
            results.extend(courses_on_page)

            #Move onto next page
            r = s.get(start + '&page=' + str(page_index))
            courses_on_page = re.findall(regex_courses, str(r.content))
            page_index += 1

    return results

def course_info(link):
    '''
    Scrapes a McGill eCalendar course webpage for course overview, prerequisites, corequisites, restrictions, semester(s) the course is being offered, and the course's professor
    '''

    def format_instructors(text):
        '''
        Appends the term which a professor gives a course after each name in the input text

        text - string which contains instructor names and the terms they teach the course. E.g.: "name, name (Fall) name, name (Winter) name, name (Summer)"
        '''
        fall_index = text.find('(Fall)')
        winter_index = text.find('(Winter)')
        summer_index = text.find('(Summer)')

        output = []
        for i in range(len(text)):
            if text[i] == ',':
                if i < fall_index:
                    output.append(' (Fall),')
                elif i > fall_index and i < winter_index:
                    output.append(' (Winter),')
                elif i > winter_index and i < summer_index:
                    output.append(' (Summer),')
            elif text[i] == ')' and i < len(text) - 1:
                output.append('),')
            else:
                output.append(text[i])

        return ''.join(output)

    def add_pcr(d, pcr, m):
        '''
        Add prereqrequisite, corerequisite, and restriction text/courses depending on regex matching

        d - dictionary to add info to
        m - regex match object
        '''
        if m:
            d[pcr + 's'] = list(set(re.findall(r'>(\w{4} \d\d\dD?1?D?2?)</a>', m[0])))
        else:
            d[pcr + 's'] = []

    with requests.Session() as s:
        r = s.get('https://mcgill.ca' + link)
        text = str(r.text)
        info = {}
        info['text'] = {}

        #Notes (includes prereq, coreq, restrict text)
        notes = re.search(r'<ul class="catalog-notes">(.*?)</ul>', r.text, flags=re.DOTALL)

        if notes:
            notes = notes[1].strip()
        else:
            notes = ''

        info['text']['notes'] = notes.replace('/study', 'https://mcgill.ca/study').replace('">', '" target="_blank">').replace('<li>', '').replace('</li>', '')

        #Prereqs
        add_pcr(info, 'prereq', re.search('((?<=\. ).*)?Prerequisite\(?s?\)?: .*?((?=\.)|(?= </p>)|(?=</p>))', notes))

        #Coreqs
        add_pcr(info, 'coreq', re.search('((?<=\. ).*)?Corequisite\(?s?\)?: .*((?=\.)|(?= </p>)|(?=</p>))', notes))

        #Restrictions
        add_pcr(info, 'restrict', re.search('((?<=\. ).*)?Restriction\(?s?\)?: .*((?=\.)|(?= </p>)|(?=</p>))', notes))

        #Title
        title_words = re.search('<h1 id ="page-title" class=" ">\n?(.*?)</h1>', r.text)[1].strip().split(' ')
        info['text']['title'] = ''.join([ '<a href="https://mcgill.ca', link, '" target="_blank">', title_words[0], ' ', title_words[1], '</a> ', ' '.join(title_words[2:]) ])

        #Overview
        info['text']['overview'] = re.findall('<p>(.*?)</p>', r.text, flags=re.DOTALL)[1].strip()

        #Terms offered
        info['text']['terms'] = re.search('<p class="catalog-terms">\n(.*?)</p>', r.text)[1].strip().replace('      ', ' ')

        #Instructors re.search('<p class="catalog-instructors">\n(.*?)</p>', r.text)[1]
        instructors = re.search('<p class="catalog-instructors">\n(.*?)</p>', r.text)[1].strip().replace('      ', ' ')
        info['text']['instructors'] = format_instructors(instructors)

    return info

def tar_to_src_dict(tar_dict):
    '''
    Convert dictionary with courses as targets into dictionary with courses as sources
    '''

    out = dict()
    def init_course(d, c):
        d[c] = {
        'prereqs': [],
        'coreqs': [],
        'restricts': [],
        'text': {}
        }

    #Iterate over every course
    for course in tar_dict:
        try:
            #Add course in src_dict
            if course not in out:
                init_course(out, course)
                out[course]['text'] = tar_dict[course]['text']

            #Iterate over data (prereqs, coreqs, restricts, text)
            for data in tar_dict[course]:
                #Only look at lists of courses
                if type(tar_dict[course][data]) == type(list()):
                    #Itereate over every course listed in first course's data
                    for c in tar_dict[course][data]:
                        #If haven't seen c yet, add it to src_dict, copy over course info
                        if c not in out:
                            tar_text = tar_dict[c]['text']
                            init_course(out, c)
                            out[c]['text'] = tar_text

                        #Don't want to write wrong courses to dict
                        if c[:4] == course[:4]:
                            out[c][data].append(course)
        except KeyError:
            print(c)
        except:
            print(course)
            raise


    return out

def to_js(sbj, start):
    '''
    Writes information scraped from course webpage to json format for web app to use
    '''
    course_links = links_to_courses(start)
    tar_dict = {}

    for link in course_links:
        # print(link)
        course_title = link.split('/')[-1].upper().replace('-', ' ')
        tar_dict[course_title] = course_info(link)
        if course_title in tar_dict[course_title]['prereqs']: tar_dict[course_title]['prereqs'].remove(course_title)
        if course_title in tar_dict[course_title]['coreqs']: tar_dict[course_title]['coreqs'].remove(course_title)
        if course_title in tar_dict[course_title]['restricts']: tar_dict[course_title]['restricts'].remove(course_title)

    with open(sbj + '_tar.js', 'w+') as t, open(sbj + '_src.js', 'w+') as s:
        t.write('global.' + sbj + '_tar = ')
        json.dump(tar_dict, t, ensure_ascii=False, indent=4)

        s.write('global.' + sbj + '_src = ')
        json.dump(tar_to_src_dict(tar_dict), s, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    to_js('biol', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0286')
    to_js('comp', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0155')
    to_js('ecse', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0156')
    to_js('math', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0290')
    to_js('phys', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0293')
    to_js('econ', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0101')
    to_js('acct', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0028')
    pass
