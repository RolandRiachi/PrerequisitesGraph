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

def course_info(dict, link):
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
            courses = list(set(re.findall(r'>(\w{4} \d\d\dD?1?D?2?)</a>', m)))

            #Remove courses that don't exist
            for c in courses:
                if c not in dict:
                    courses.remove(c)

            d[pcr + 's'] = courses
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
        prereq_text = ''.join([ s[0] for s in re.findall('Prerequisite\(?s?\)?: (.*?)((?=\.)|(?= </p>)|(?=</p>))', notes) ])
        add_pcr(info, 'prereq', prereq_text)

        #Coreqs
        coreq_text = ''.join([ s[0] for s in re.findall('Corequisite\(?s?\)?: (.*)((?=\.)|(?= </p>)|(?=</p>))', notes) ])
        add_pcr(info, 'coreq', coreq_text)

        #Restrictions
        restrict_text = ''.join([ s[0] for s in re.findall('Restriction\(?s?\)?: (.*)((?=\.)|(?= </p>)|(?=</p>))', notes) ])
        add_pcr(info, 'restrict', restrict_text)

        #Title (course code, course name, # of credits), course name
        title_words = re.search('<h1 id ="page-title" class=" ">\n?(.*?)</h1>', r.text)[1].strip().split(' ')
        info['text']['name'] = ' '.join(title_words[2:-2])
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

    out = {}
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
                        #Don't want to write wrong courses to dict
                        if c[:4] == course[:4]:
                            #If haven't seen c yet, add it to src_dict, copy over course info
                            if c not in out:
                                init_course(out, c)
                                out[c]['text'] = tar_dict[c]['text']

                            out[c][data].append(course)
        except KeyError:
            print(course, c)
        except:
            print(course)
            raise

    return out

def scrape_courses(sbj, start):
    '''
    Writes information scraped from course webpage to json format for web app to use
    '''
    course_links = links_to_courses(start)
    tar_dict = { link.split('/')[-1].upper().replace('-', ' ') : {} for link in course_links }

    for link in course_links:
        course_title = link.split('/')[-1].upper().replace('-', ' ')
        tar_dict[course_title] = course_info(tar_dict, link)
        if course_title in tar_dict[course_title]['prereqs']: tar_dict[course_title]['prereqs'].remove(course_title)
        if course_title in tar_dict[course_title]['coreqs']: tar_dict[course_title]['coreqs'].remove(course_title)
        if course_title in tar_dict[course_title]['restricts']: tar_dict[course_title]['restricts'].remove(course_title)

    return tar_dict

def to_js(sbj, b, dict):
    '''
    Writes dictionary information to javascript variable
    '''
    with open(sbj + '_' + b + '.js', 'w+') as t:
        t.write('global.' + sbj + '_' + b + ' = ')
        json.dump(dict, t, ensure_ascii=False, indent=4)

    # with open(sbj + '_tar.js', 'w+') as t, open(sbj + '_src.js', 'w+') as s:
    #     t.write('global.' + sbj + '_tar = ')
    #     json.dump(tar_dict, t, ensure_ascii=False, indent=4)
    #
    #     s.write('global.' + sbj + '_src = ')
    #     json.dump(tar_to_src_dict(tar_dict), s, ensure_ascii=False, indent=4)

def remove_courses(d):
    def remove_pcr(c, pcr):
        u = c[:4].lower()
        try:
            d[u][c]
        except KeyError:
            d[unit][course][pcr].remove(c)

    for unit in d:
        for course in d[unit]:
            for p in d[unit][course]['prereqs']:
                remove_pcr(p, 'prereqs')
            for c in d[unit][course]['coreqs']:
                remove_pcr(c, 'coreqs')
            for r in d[unit][course]['restricts']:
                remove_pcr(r, 'restricts')

if __name__ == '__main__':
    all_courses = {}
    all_courses['biol'] = scrape_courses('biol', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0286')
    all_courses['comp'] = scrape_courses('comp', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0155')
    all_courses['ecse'] = scrape_courses('ecse', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0156')
    all_courses['math'] = scrape_courses('math', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0290')
    all_courses['phys'] = scrape_courses('phys', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0293')
    all_courses['econ'] = scrape_courses('econ', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0101')
    all_courses['acct'] = scrape_courses('acct', 'https://www.mcgill.ca/study/2019-2020/courses/search?sort_by=field_subject_code&f%5B0%5D=field_dept_code%3A0028')

    remove_courses(all_courses)

    for k, v in all_courses.items():
        to_js(k, 'tar', v)
        print(k)
        to_js(k, 'src', tar_to_src_dict(v))
