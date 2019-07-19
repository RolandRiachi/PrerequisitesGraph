var cy = cytoscape({
  container: document.getElementById('cy'),
  zoomingEnabled: false,
  elements: [
    { data: { id: 'a' } },
    { data: { id: 'b' } },
    { data: { id: 'c' } },
    { data: { id: 'd' } },
    { data: { id: 'ab', source: 'a', target: 'b' } },
    { data: { id: 'bc', source: 'b', target: 'c' } },
    { data: { id: 'ac', source: 'a', target: 'c' } },
    { data: { id: 'ad', source: 'a', target: 'd' } }
  ]
});

// document.getElementById('cy').width = '500px'
// cy.resize();
// cy.fit();
