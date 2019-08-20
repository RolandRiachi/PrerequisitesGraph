from urllib.request import urlopen
from re import findall, compile

'''
Crawls McGill faculty (bio) course page for information about prerequisites, corequisites, and restrictions on courses offered.

The information gathered is only course codes - the course page should still be consulted to view any other textual information, especially for freshman and graduate courses.
'''

OUTFILE = open("courses.txt", 'w')
CODE = compile(r"[A-Z][A-Z][A-Z][A-Z] \d\d\d")

#Open McGill math faculty courses page
with urlopen("http://biology.mcgill.ca/undergrad/quicklinks.html") as response:
    html = str(response.read())
    response.close()

#Get all course codes on the page
#Note the first 9 and last 3 matches are duds, they were sorted out manually
links = findall(r"courses/.{1,10}\.html", html)
courses = ["BIOL " + link[9:12] for link in links]

#Extract prereqs, coreqs, restrictions of every course
for ind in range(len(courses)):
    #Open course's page
    url = "http://biology.mcgill.ca/undergrad/" + links[ind]
    out_info = [courses[ind]]

    with urlopen(url) as course_page_response:
        course_page_html = str(course_page_response.read())
        course_page_response.close()

    pindex = course_page_html.find('Prerequisite', 0, -1) #Index of prereqs
    pstart = course_page_html.find('<tr>', pindex, -1)
    pend = course_page_html.find('</tr>', pstart, -1)
    cindex = course_page_html.find('Corequisite', 0, -1) #Index of coreqs
    cstart = course_page_html.find('<tr>', cindex, -1)
    cend = course_page_html.find('</tr>', cstart, -1)
    rindex = course_page_html.find('Restriction', 0, -1) #Index of restrictions
    rstart = course_page_html.find('<tr>', rindex, -1)
    rend = course_page_html.find('</tr>', rstart, -1)

    #Get strings relevent for finding prereq, coreqs, restrictions
    p_str = course_page_html[pstart:pend]
    c_str = course_page_html[cstart:cend]
    r_str = course_page_html[rstart:rend]

##    ##For debugging string outputs
    print(courses[ind])
##    print(findall(CODE, p_str))
##    print(findall(CODE, c_str))
##    print(findall(CODE, r_str))
##    print('\n')
    
    #Build output list for output string
    out_info.append(','.join(findall(CODE, p_str)))
    out_info.append(','.join(findall(CODE, c_str)))
    out_info.append(','.join(findall(CODE, r_str)))

    #Write out information to outfile as 1 line
    OUTFILE.write('/'.join(out_info))
    OUTFILE.write('\n')  

print("All Done!")
OUTFILE.close()
