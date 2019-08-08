import networkx as nx
import matplotlib.pyplot as plt
from sys import argv

'''Builds graph of prequisites, corequisites, and restrictions from information gathered by prereqs.py'''

LABELS = argv[1]
FROM = int(argv[2])
TO = int(argv[3])

INFILE = open("math_courses.txt", 'r')

#Unpackage information from INFILE, processing it to be ready to add to graph
#COURSE CODE/PREREQS/COREQS/RESTRS <- each portion is further seperated by commas
courses_info = INFILE.readlines()

for ind in range(len(courses_info)):
    course_str = courses_info[ind] #Get info about course
    course_str = course_str[:-1] #Remove newline char at the end

    #Unpackage info, process it into ready-to-add lists of edges
    course = course_str.split('/')
    if (course[1] != ''):
        course[1] = [(prereq, course[0], {'color':'blue'}) for prereq in course[1].split(',')]
    if (course[2] != ''):
        course[2] = [(coreq, course[0], {'color':'orange'}) for coreq in course[2].split(',')]
    if (course[3] != ''):
        course[3] = [(restr, course[0], {'color':'red'}) for restr in course[3].split(',')]

    courses_info[ind] = course

#Build graph
G = nx.DiGraph()

#Add nodes
for course in courses_info[FROM:TO]:
    G.add_node(course[0])

#Add edges
for course in courses_info[FROM:TO]:
    if ('p' in LABELS):
        G.add_edges_from(course[1])
    if ('c' in LABELS):
        G.add_edges_from(course[2])
    if ('r' in LABELS):
        G.add_edges_from(course[3])

edges = G.edges()
colors = [G[u][v]['color'] for u,v in edges]

#Build figure
plt.figure(figsize = (20,10))
nx.draw_circular(G, with_labels = True, node_size = 1000, font_size = 12, edge_color = colors)
plt.show()
