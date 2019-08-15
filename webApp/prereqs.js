var cy = cytoscape({
  container: document.getElementById('cy'),
  userZoomingEnabled: true,
  minZoom: 1e-1,
  maxZoom: 1,
  style: [ // the stylesheet for the graph
    {
      selector: '.prereqs',
      style: {
        'curve-style': 'straight',
        'line-color': 'blue',
        'target-arrow-shape': 'triangle',
        'arrow-scale': 2,
        'target-arrow-color': 'blue'
      }
    },
    {
      selector: '.coreqs',
      style: {
        'curve-style': 'bezier',
        'line-color': 'orange',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': 'orange',
        'arrow-scale': 2
      }
    },
    {
      selector: '.restricts',
      style: {
        'curve-style': 'straight',
        'line-color': 'red',
        'target-arrow-shape': 'triangle',
        'arrow-scale': 2,
        'target-arrow-color': 'red'
      }
    },
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },
    {
      selector: '.hidden-node',
      style: {
        // 'background-color': '',
        'background-opacity': 0.5
      }
    },
    {
      selector: '.hidden-edge',
      style: {
        opacity: 0
      }
    }
  ]
});

var options = {
  name: 'breadthfirst',

  fit: true, // whether to fit the viewport to the graph
  directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30, // padding on fit
  grid: true, // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: true, // Excludes the label when calculating node bounding boxes for the layout algorithm
  maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
  root: undefined
};

cy.layout( options );

cy.on('resize', function(){
  cy.center( cy.data() );
  cy.fit( cy.data(), 50);
});

cy.on('click', 'node', function(e){
  var course, behaviour, id, incoming, outgoing, successiveNodes, preceedingNodes, visitedCollections = [];
  //Reduce visibility of node
  this.addClass('hidden-node');

  //Get the id of the node that was clicked
  id = this.id();

  //Set up the selector for the node used to create the graph
  course_selector = 'node[id = "' + options['root'] + '"]';

  //If the course has no incoming edges, then course behaves like the "source"; otherwise it behaves like the "target"
  if ( cy.$(course_selector).roots().length > 0 ) behaviour = 1;
  else behaviour = 0;

  //If nothing is stored in the scratch, then the node hasn't been removed
  if ( this.scratch(id) == null ){
    if ( behaviour ){
      //Save all nodes reachable from node and edges leaving node
      outgoing = cy.elements('edge[source = "' + id + '"]');
      successiveNodes = cy.$('[id = "' + id + '"]').successors('node');
      visitedCollections.push(successiveNodes);
      visitedCollections.push(outgoing);

      //Remove outgoing edges
      outgoing.remove();

      //For each descendant, if it's reachable from root, don't touch it
      for ( var i = 0; i < successiveNodes.length; i++ ) {
          nodeId = successiveNodes[i].id();
          //Breadth first search for node in tree
          bfs = cy.elements().breadthFirstSearch({
            root: course_selector,
            visit: function(v, e, u, i, depth){
              if ( v.id() == nodeId ) return true;
            },
            directed: true
          });
          //If not found, save node and outgoing edges then remove
          if ( bfs.found.length == 0 ){
            node = cy.$('[id = "' + nodeId + '"]');
            visitedCollections.push(node)
            edges = cy.$('edge[source = "' + nodeId + '"]');
            visitedCollections.push(edges);

            edges.remove();
            node.remove();
          }
      }
      //Store everything in temp storage attached to node
      this.scratch(id, visitedCollections);
    }else {
      // //Save edges leave node
      // outgoing = cy.elements('edge[source = "' + id + '"]');
      // visitedCollections.push(outgoing);
      //
      // //Save all nodes and edges that lead to node
      // preceedingNodes = cy.$('[id = "' + id + '"]').incomers('node[id != "' + options['root'] + '"]');
      // visitedCollections.push(preceedingNodes);
      // visitedCollections.push(preceedingNodes.connectedEdges());
      // this.scratch(id, visitedCollections);
      //
      // //Remove all elements once they've been saved
      // for ( var i = 0; i < visitedCollections.length; i++ ) visitedCollections[i].remove();
      // outgoing = cy.elements('edge[source = "' + id + '"]');
      incoming = cy.elements('edge[target = "' + id + '"]');
      preceedingNodes = cy.$('[id = "' + id + '"]').predecessors('node');
      console.log(preceedingNodes);
      visitedCollections.push(preceedingNodes);
      // visitedCollections.push(outgoing);
      visitedCollections.push(incoming);

      //Remove incoming edges
      // outgoing.remove();
      incoming.remove();

      //For each ancestor, if root is reachable from it, don't touch it
      for ( var i = 0; i < preceedingNodes.length; i++ ) {
          nodeId = preceedingNodes[i].id();
          //Breadth first search for node in tree
          bfs = cy.elements().breadthFirstSearch({
            root: '[id = "' + nodeId + '"]',
            visit: function(v, e, u, i, depth){
              if ( v.id() == options['root'] ) return true;
            },
            directed: true
          });
          //If not found, save node and outgoing edges then remove
          if ( bfs.found.length == 0 ){
            node = cy.$('[id = "' + nodeId + '"]');
            visitedCollections.push(node)
            edges = cy.$('edge[target = "' + nodeId + '"]');
            visitedCollections.push(edges);

            edges.remove();
            node.remove();
          }
      }
      //Store everything in temp storage attached to node
      this.scratch(id, visitedCollections);
    }
  }else {
    //Restore the removed elements and reset the scratch
    this.removeClass('hidden-node');
    visitedCollections = this.scratch(id);

    for ( var i = 0; i < visitedCollections.length; i++ ) visitedCollections[i].restore();

    this.scratch(id, null);
  }
});
//Hide node on click
//Clicked node -> change style to be grayed out
//Remove outgoing edges from clicked nodes
//Remove incoming edges to clicked nodes -> display none, then display: none the source node is there's
//no more path from the source node to the chosen course

function DFS(course, behaviour, opts, interDepartment) {
  //For now just work if math dictionaries, later have to figure out how to scale
  var dict, from, to, type, neigh_type, item;
  var temp = [], nodes = [], edges = [];

  //Choose which dictionary to use based on department of course and behaviour chosen
  dict = departments[course.substr(0, 4)][behaviour]

  //Init stack and push children of course
  for ( var i = 0; i < opts.length; i++ ){
    t = opts[i];
    for ( var j = 0; j < dict[course][t].length; j++ ) {
      c = dict[course][t][j];
      temp.push( [t, c, course] );
    }
  }

  nodes.push( { group: 'nodes', data: { id: course } } );

  //While there are still nodes to visit
  while ( temp.length > 0 ){
    try{
      item = temp.pop();
      curr_type = item[0], s = item[1], t = item[2];

      //Orientate direction of edge
      if ( behaviour ) {from = t; to = s;}
      else {from = s; to = t;}

      //Add parent node to node list, add edge to edge list
      nodes.push( { group: 'nodes', data: { id: s } } );
      edges.push( { group: 'edges', data: { id: from + '-' + to, source: from, target: to }, classes: curr_type } );

      //If you inter-departmental search is on
      if ( interDepartment ) dict = departments[s.substr(0, 4)][behaviour];

      //Push all children onto the stack
      for ( var i = 0; i < opts.length; i++ ){
        type = opts[i];
        if ( curr_type != 'restricts' ) {
          for ( var j = 0; j < dict[s][type].length; j++ ){
            c = dict[s][type][j];
            if ( !(nodes.includes(c)) ) temp.push( [type, c, s] );
          }
        }
      }
    } catch (err) {console.log(s);}
  }

  cy.elements().remove();
  cy.add( nodes );
  cy.add( edges );
  options['root'] = course;
  cy.layout( options ).run();
};
