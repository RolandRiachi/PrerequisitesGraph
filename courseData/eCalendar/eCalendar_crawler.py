import requests
import re
import json

#Finding links to courses - re.findall('<a href="(/study/2019-2020/courses/.{4}-\d\d\d)">.*?</a>', str(r.text))
#Finding link to next page - re.search('<li class="pager-next"><a href="(.*?)">', str(r.text))

#Things to scrape from each page:
#Course overview
#Course prereqs, coreqs, restrictions
#Whether its being offered in fall/winter
#Prof thats teaching the course?

#Output to following format:
# {
#     COURSETITLE: {
#         prereqs: [],
#         coreqs: [],
#         restricts: [],
#         info: []
#     }
# }

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
        fall_index = text.find(' (Fall) ')
        winter_index = text.find(' (Winter) ')
        summer_index = text.find(' (Summer) ')

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
            info['text'][pcr + '_text'] = m[0].replace('/study', 'https://mcgill.ca/study').replace('">', '" target="_blank">')
            info[pcr + 's'] = re.findall(r'([A-Z]{4} \d\d\d)', m[0])
        else:
            info['text'][pcr + '_text'] = ''
            info[pcr + 's'] = []

    with requests.Session() as s:
        r = s.get('https://mcgill.ca' + link)
        text = str(r.text)
        info = {}
        info['text'] = {}

        #Prereqs
        add_pcr(info, 'prereq', re.search('((?<=\. ).*)?Prerequisites?: .*?((?=\.)|(?= </p>)|(?=</p>))', r.text))

        #Coreqs
        add_pcr(info, 'coreq', re.search('((?<=\. ).*)?Corequisites?: .*((?=\.)|(?= </p>)|(?=</p>))', r.text))

        #Restrictions
        add_pcr(info, 'restrict', re.search('((?<=\. ).*)?Restrictions?: .*((?=\.)|(?= </p>)|(?=</p>))', r.text))

        #Title
        info['text']['title'] = re.search('<h1 id ="page-title" class=" ">\n?(.*?)</h1>', r.text)[1].strip()

        #Overview
        info['text']['overview'] = re.findall('<p>\n?(.*?)</p>', r.text)[1].strip()

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

def to_json(sbj, start):
    '''
    Writes information scraped from course webpage to json format for web app to use
    '''
    course_links = links_to_courses(start)
    tar_dict = {}

    for link in course_links:
        course_title = link.split('/')[-1].upper().replace('-', ' ')
        tar_dict[course_title] = course_info(link)

    with open(sbj + '_tar.json', 'w+') as t, open(sbj + '_src.json', 'w+') as s:
        json.dump(tar_dict, t, ensure_ascii=False, indent=4)
        json.dump(tar_to_src_dict(tar_dict), s, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    to_json('phys', 'https://mcgill.ca/study/2019-2020/courses/search?f%5B0%5D=field_dept_code%3A0293')
    # courses = links_to_courses('https://mcgill.ca/study/2019-2020/courses/search?f%5B0%5D=field_dept_code%3A0290')
    # print(course_info(courses[16]))
