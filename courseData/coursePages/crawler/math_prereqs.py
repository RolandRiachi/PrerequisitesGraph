from urllib.request import urlopen
from re import findall, compile

'''
Crawls McGill faculty (math) course page for information about prerequisites, corequisites, and restrictions on courses offered.

The information gathered is only course codes - the course page should still be consulted to view any other textual information, especially for freshman and graduate courses.
'''

OUTFILE = open("courses.txt", 'w')
CODE = compile(r"[A-Z][A-Z][A-Z][A-Z] \d\d\d")

#Open McGill math faculty courses page
with urlopen("http://www.math.mcgill.ca/courses/") as response:
    html = str(response.read())
    response.close()

#Get all course codes on the page
courses = findall(CODE, html)

#Extract prereqs, coreqs, restrictions of every course
for course in courses:
    #Open course's page
    url = "https://horizon.mcgill.ca/pban1/bwckctlg.p_disp_course_detail?cat_term_in=201809&subj_code_in=MATH&crse_numb_in=" + course[5:]
    out_info = [course]

    with urlopen(url) as course_page_response:
        course_page_html = str(course_page_response.read())
        course_page_response.close()

    pindex = course_page_html.find('Prerequisite', 0, -1) #Index of prereqs
    pend = course_page_html.find('<BR>', pindex, -1)
    cindex = course_page_html.find('Corequisite', 0, -1) #Index of coreqs
    cend = course_page_html.find('<BR>', cindex, -1)
    rindex = course_page_html.find('Restriction', 0, -1) #Index of restrictions
    rend = course_page_html.find('<BR>', rindex, -1)

    #Get strings relevent for finding prereq, coreqs, restrictions
    p_str = course_page_html[pindex:pend]
    c_str = course_page_html[cindex:cend]
    r_str = course_page_html[rindex:rend]

    ##For debugging string outputs
    ##print(course)
    ##print(findall(CODE, p_str))
    ##print(findall(CODE, c_str))
    ##print(findall(CODE, r_str))
    ##print('\n')

    #Build output list for output string
    out_info.append(','.join(findall(CODE, p_str)))
    out_info.append(','.join(findall(CODE, c_str)))
    out_info.append(','.join(findall(CODE, r_str)))

    #Write out information to outfile as 1 line
    OUTFILE.write('/'.join(out_info))
    OUTFILE.write('\n')  

print("All Done!")
OUTFILE.close()
