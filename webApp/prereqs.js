var cy = cytoscape({
  container: document.getElementById('cy'),
  userZoomingEnabled: true,
  minZoom: 1e-50,
  maxZoom: 1,
  // elements: [
  //   { data: { id: 'a' } },
  //   { data: { id: 'b' } },
  //   { data: { id: 'c' } },
  //   { data: { id: 'd' } },
  //   { data: { id: 'ab', source: 'a', target: 'b' }, classes: 'p' },
  //   { data: { id: 'bc', source: 'b', target: 'c' }, classes: 'c' },
  //   { data: { id: 'ac', source: 'a', target: 'c' } },
  //   { data: { id: 'ad', source: 'a', target: 'd' } }
  // ],
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
        'curve-style': 'straight',
        'line-color': 'orange',
        'target-arrow-shape': 'triangle',
        'arrow-scale': 2,
        'target-arrow-color': 'orange'
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
  circle: false, // put depths in concentric circles if true, put depths top down if false
  grid: true, // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: true, // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: undefined, // the roots of the trees
  maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled,
  animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: undefined, // callback on layoutready
  stop: undefined, // callback on layoutstop
  transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
};

cy.on('resize', function(){
  cy.center( cy.data() );
  cy.fit( cy.data(), 50);
});

function DFS(course, behaviour, opts) {
  //For now just work if math dictionaries, later have to figure out how to scale
  var dict, from, to, type, item, i, j;
  var temp = [], nodes = [], edges = [];

  dict = courses[course.substr(0, 4)][behaviour]

  // //Choose dictionary based on chosen behaviour
  // if ( behaviour ) dict = math_src;
  // else dict = math_tar;

  //Init stack and push children of course
  for ( i = 0; i < opts.length; i++ ){
    t = opts[i];
    for ( j = 0; j < dict[course][t].length; j++ ) {
      c = dict[course][t][j];
      temp.push( [t, c, course] );
    }
  }

  nodes.push( { group: 'nodes', data: { id: course } } );

  //While there are still nodes to visit
  while ( temp.length > 0 ){
    try{
      item = temp.pop();
      type = item[0], s = item[1], t = item[2];

      //Orientate direction of edge
      if ( behaviour ) {from = t; to = s;}
      else {from = s; to = t;}

      //Add parent node to node list, add edge to edge list
      nodes.push( { group: 'nodes', data: { id: s } } );
      edges.push( { group: 'edges', data: { id: from + '-' + to, source: from, target: to }, classes: type } );

      //Push all children onto the stack
      for ( i = 0; i < opts.length; i++ ){
        type = opts[i];
        for ( j = 0; j < dict[s][type].length; j++ ){
          c = dict[s][type][j];
          if ( !(nodes.includes(c)) ) temp.push( [type, c, s] );
        }
      }
    } catch (err) {console.log(s);}
  }

  cy.elements().remove();
  cy.add( nodes );
  cy.add( edges );
  cy.layout( options ).run();
};

//Store prereq information in seperate code file as a variable
//Don't need forms, can just use getElementById on inputs, use .value
//Can use checkboxes instead of radio buttons with java, use onchange
//e.target.value
