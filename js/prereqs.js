var cy = cytoscape({
  container: document.getElementById('cy'),
  userZoomingEnabled: true,
  minZoom: 1e-1,
  maxZoom: 1,
  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'width': 'data(width)',
        'height': 'data(height)',
        'padding': '15px',
        'background-color': '#97AABD',
        'label': 'data(id)',
        'font-family': 'Verdana, Arial, Helvetica, sans-serif',
        'text-wrap': 'wrap',
        'text-halign': 'center',
        'text-valign': 'center'
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
      selector: '.main-course',
      style: {
        'background-color': '#6BA292'
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'straight',
        'width': '7',
        'target-arrow-shape': 'triangle',
        'arrow-scale': 1.5
      }
    },
    {
      selector: '.prereqs',
      style: {
        'line-color': '#4056A1',
        'target-arrow-color': '#4056A1'
      }
    },
    {
      selector: '.coreqs',
      style: {
        'line-color': 'orange',
        'target-arrow-color': 'orange'
      }
    },
    {
      selector: '.restricts',
      style: {
        'line-color': 'red',
        'target-arrow-color': 'red'
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
  var course, behaviour, id, visitedCollections = [];
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
      var successiveNodes, successiveEdges, outgoing;

      //Save all nodes reachable from clicked node and edges leaving clicked node
      successiveNodes = cy.$('[id = "' + id + '"]').successors('node');
      successiveEdges = cy.$('[id = "' + id + '"]').successors('edge');
      visitedCollections.push(successiveNodes);
      visitedCollections.push(successiveEdges);

      //Remove outgoing edges
      outgoing = cy.$('[source = "' + id + '"]');
      outgoing.remove();

      // For each descendant, if it's reachable from root, don't touch it
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
          //If not found, remove node and outgoing edges
          if ( bfs.found.length == 0 ){
            node = cy.$('[id = "' + nodeId + '"]');
            edges = cy.$('edge[source = "' + nodeId + '"]');

            edges.remove();
            node.remove();
          }
      }
      //Store everything in temp storage attached to node
      this.scratch(id, visitedCollections);
    }else {
      var preceedingNodes, preceedingEdges, incoming;

      //Save all nodes that can reach clicked node and edges entering clicked node
      preceedingNodes = cy.$('[id = "' + id + '"]').predecessors('node');
      preceedingEdges = cy.$('[id = "' + id + '"]').predecessors('edge');
      visitedCollections.push(preceedingNodes);
      visitedCollections.push(preceedingEdges);

      //Remove incoming edges
      incoming = cy.elements('edge[target = "' + id + '"]');
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
          //If not found, remove node and incoming edges
          if ( bfs.found.length == 0 ){
            node = cy.$('[id = "' + nodeId + '"]');
            edges = cy.$('edge[target = "' + nodeId + '"]');

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

    visitedCollections[0].restore();
    visitedCollections[1].restore();

    this.scratch(id, null);
  }
});

//Display course information in side-panel on hover
cy.on("mouseover", "node", function(e) {
  var textbox, info;

  if ( document.getElementById('course-info') ) document.getElementById('side-panel-content').removeChild(document.getElementById('course-info'));

  //Create div element for course information text
  textbox = document.createElement('div');
  textbox.setAttribute('id', 'course-info');

  info = departments[this.id().substr(0, 4)][0][this.id()]['text'];
  textbox.innerHTML = "<p>" + info['title'] + "</p>";
  textbox.innerHTML += "<p>" + info['overview'] + "</p>";
  textbox.innerHTML += "<p>" + info['terms'] + "</p>";
  textbox.innerHTML += "<p>" + info['instructors'] + "</p>";
  textbox.innerHTML += info['notes'];

  document.getElementById('side-panel-content').appendChild(textbox);
});

cy.on("mouseover", "node", function(e){
  this.data('width', this.width() * 1.5);
  this.data('height', this.height() * 1.5);
});

cy.on("mouseout", "node", function(e) {
  this.data('width', 'label');
  this.data('height', this.width());
});

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

  nodes.push( { group: 'nodes', data: { id: course, height: 0, width: 'label'} } );

  //While there are still nodes to visit
  while ( temp.length > 0 ){
    try{
      item = temp.pop();
      curr_type = item[0], s = item[1], t = item[2];

      //Orientate direction of edge
      if ( behaviour ) {from = t; to = s;}
      else {from = s; to = t;}

      //Add parent node to node list, add edge to edge list
      nodes.push( { group: 'nodes', data: { id: s, height: 0, width: 'label' } } );
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
  cy.$('[id ="' + course + '" ]').addClass('main-course');
  cy.nodes().forEach(function( n ){ n.data('height', n.width()); });
  cy.layout( options ).run();
};
