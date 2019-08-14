var cy = cytoscape({
  container: document.getElementById('cy'),
  userZoomingEnabled: true,
  minZoom: 1e-50,
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
};

cy.layout( options );

cy.on('resize', function(){
  cy.center( cy.data() );
  cy.fit( cy.data(), 50);
});

function DFS(course, behaviour, opts) {
  //For now just work if math dictionaries, later have to figure out how to scale
  var dict, from, to, type, neigh_type, item;
  var temp = [], nodes = [], edges = [];

  //Choose which dictionary to use based on faculty of course and behaviour chosen
  dict = faculties[course.substr(0, 4)][behaviour]

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

      //If you want inter-faculty search
      // dict = faculties[s.substr(0, 4)][behaviour];

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
  cy.layout( options ).run();
};
