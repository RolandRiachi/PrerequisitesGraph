import json
import networkx as nx
import matplotlib.pyplot as plt

class DFS():
    def __init__(self, tar, src):
        '''
        t - Dictionary that lists a course's prereqs, coreqs, and restrictions
        s - Dictionary that lists all courses a course is a prereq, coreq, or restriction of
        edge_colors - Color scheme of edges in graph
        '''

        self.t = tar
        self.s = src
        self.edge_colors = {
        'p': 'blue',
        'c': 'orange',
        'r': 'red'
        }

    def dfs(self, choice, course, options):
        '''
        Run depth-first search starting with "target" node tar
        choice - How the chosen chourse should behave (target or source)
        course - where to start graph traversal from
        '''

        #Error check choice
        if choice == 'target':
            d = self.t
        elif choice == 'source':
            d = self.s
        else:
            raise TypeError

        #Error check course
        if course not in d:
            raise ValueError(course)

        #Error check options
        if not set(options).issubset(set(['prereqs', 'coreqs', 'restricts'])):
            raise TypeError

        #Reset any previous searches
        self.nodes = []
        self.edges = {
        'p': [],
        'c': [],
        'r': []
        }

        #Init stack and push children of course, check each child exists in dictionary
        temp = []
        try:
            for t in options:
                for c in d[course][t]:
                    temp.append( (t[0], c, course) )
        except KeyError:
            raise KeyError(d[course][t])

        #While there are still nodes to visit
        while len(temp) > 0:
            #Handle if any children aren't in dictionary
            try:
                type, s, t = temp.pop()

                #Orientate direction of edge
                if choice == 'target':
                    fro, to = s, t
                else:
                    fro, to = t, s

                #Add parent node to node list, add edge to edge list
                self.nodes.append(t)
                self.edges[type].append( (fro, to, { 'color': self.edge_colors[type] }) )

                #Push all children onto stack
                for type in options:
                    for c in d[s][type]:
                        if c not in self.nodes:
                            temp.append( (type[0], c, s) )
            except KeyError:
                print(s)

    def draw(self):
        '''
        Draws DFS tree using default networkx drawing tool
        '''
        G = nx.DiGraph()

        #Add nodes and edges from DFS to graph
        for c in self.nodes:
            G.add_node(c)

        for t in self.edges:
            G.add_edges_from(self.edges[t])

        #Add edge colors
        edges = G.edges()
        colors = [G[u][v]['color'] for u, v in edges]

        #Draw graph
        plt.figure(figsize=(20,10))
        nx.draw(G, with_labels=True, node_size=1000, font_size=12, edge_color=colors)
        plt.show()

if __name__ == '__main__':
    with open('./math_tar.json', 'r') as tar, open('./math_src.json', 'r') as src:
        t = json.load(tar)
        s = json.load(src)
        graph = DFS(t, s)

        graph.dfs('source', "MATH 315", ['prereqs', 'coreqs', 'restricts'])
        graph.draw()
