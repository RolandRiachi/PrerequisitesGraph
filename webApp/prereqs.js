var cy = cytoscape({
  container: document.getElementById('cy'),
  userZoomingEnabled: false,
  minZoom: 1e-50,
  maxZoom: 1,
  elements: [
    { data: { id: 'a' } },
    { data: { id: 'b' } },
    { data: { id: 'c' } },
    { data: { id: 'd' } },
    { data: { id: 'ab', source: 'a', target: 'b' } },
    { data: { id: 'bc', source: 'b', target: 'c' } },
    { data: { id: 'ac', source: 'a', target: 'c' } },
    { data: { id: 'ad', source: 'a', target: 'd' } }
  ],
  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': 'black',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  layout: {
    name: 'grid',
    rows: 2
  }
});

function submitForms() {
  document.getElementById('slide-inactive').id = 'slide-active';
  course = document.getElementById("course-input").value;
  if ( course != "" ) {
    document.getElementById("course-input").value = "";
    console.log(course);

    cy.add([
      { group: 'nodes', data: { id: course }, position: { x: 500, y: 250 } },
    ]);
    collapseSidebar();
    // cy.center(cy.data());
    // cy.fit(cy.data(), 50);
  }
};

cy.on('resize', function(){
  cy.center( cy.data() );
  cy.fit( cy.data(), 50);
});

//Store prereq information in seperate code file as a variable
//Don't need forms, can just use getElementById on inputs, use .value
//Can use checkboxes instead of radio buttons with java, use onchange
//e.target.value
