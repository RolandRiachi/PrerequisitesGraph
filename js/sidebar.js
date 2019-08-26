function collapseSidebar(){
  //Hide side bar
  //Too much html to remove and add on button click
  document.getElementById("side-panel").style.width = "0";

  //Show expand button and stretch main-panel and graph canvas to entire screen
  document.getElementById("expand-button").style.width = "auto";
  document.getElementById("main-panel").style.width = "100%";
  document.getElementById("cy").style.width = "100%";
};

function expandSidebar(){
  //Hide expand button and shrink main panel and graph canvas to original sizes
  document.getElementById("expand-button").style.width = "0";
  document.getElementById("main-panel").style.width = "80%";
  document.getElementById("cy").style.width = "auto";

  //Expand side bar
  document.getElementById("side-panel").style.width = "20%";
};

function toggle(){
  //Toggles between two options
  //Also prevents user from returning to state where neither option is checked
  this.checked = true;
  this.other.checked = false;
};

function autocomplete() {
  var inp, numSuggestionsShown, recentlyScrolled;

  //Text field
  inp = document.getElementById("course-input");

  //Number of suggestions to display
  var numSuggestionsShown = 10;
  //If "active" suggestion was recently scrolled with arrow keys
  var recentlyScrolled = false;

  //execute a function when someone writes in the text field
  inp.addEventListener("input", function(e) {
      var list, item, i, numResults, val = this.value;

      //close any already open lists of autocompleted values
      closeAllLists();

      //Do nothing if there's no input text
      if (!val) { return false; }

      //create a DIV element that will contain the items (values)
      list = document.createElement("DIV");
      list.setAttribute("id", "autocomplete-list");
      list.setAttribute("class", "autocomplete-items");

      //append the DIV element as a child of the autocomplete container:
      this.parentNode.appendChild(list);

      //for each item in the array
      for (i = 0; i < courses.length; i++) {
        //Check if the text field value is a substring of the item
        n = courses[i].toUpperCase().indexOf(val.toUpperCase());

        //Add 1 to include subtrings starting at beginning of item
        if ( n + 1 ){
          //create a DIV element for each matching element:
          item = document.createElement("div");

          //make the matching letters bold:
          item.innerHTML = courses[i].substr(0, n);
          item.innerHTML += "<strong>" + courses[i].substr(n, val.length) + "</strong>";
          item.innerHTML += courses[i].substr(n + val.length);

          //insert a input field that will hold the current array item's value:
          item.innerHTML += "<input type='hidden' value='" + courses[i] + "'>";

          //Insert the value for the complete text field when someone clicks on the item value (DIV element)
          item.addEventListener("click", function(e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            //close the list of autocompleted values, or any other open lists of autocompleted values:
            closeAllLists();
          });

          //Set element as "active" on mouseover
          item.addEventListener("mouseover", function(e) {
            if ( recentlyScrolled ) {
              recentlyScrolled = false;
              return;
            }
            else addActive(this);
          })

          //Add item to autocomplete list
          list.appendChild(item);
        }
      }
      //If no children, close list
      if ( list.children.length == 0 ) closeAllLists(list);
  });

  //Scroll through list with arrowkeys
  inp.addEventListener("keydown", function(e) {
    //Check if autosuggestion box is open
    var list = document.getElementById("autocomplete-list");
    if ( list && list.offsetHeight > 0 ) listHeight = list.offsetHeight;
    else return;

    //Get current active element
    var currActive = document.getElementsByClassName("autocomplete-active")[0]

    //Scroll if up/down, select value if enter
    if (e.keyCode == 40) {
      //If down key is pressed, make next node "active", stopping at the last node in the list
      //If nothing is active, make first node active
      if ( currActive && currActive.nextSibling ) {
        var newActive = currActive.nextSibling;
        addActive(newActive);

        //Scroll down if newActive is off-list
        recentlyScrolled = true;
        if ( newActive.offsetTop - list.scrollTop >= listHeight ) list.scrollTop = newActive.offsetTop - (numSuggestionsShown - 1) * newActive.offsetHeight;
      }
      else if ( !currActive ) addActive(list.getElementsByTagName("div")[0]);

    } else if (e.keyCode == 38) {
      //If up key is pressed, make previous node "active", stopping at first node in the list
      //If nothing is pressed, do nothing
      if ( currActive && currActive.previousSibling ) {
        var newActive = currActive.previousSibling;
        addActive(newActive);

        //Scroll up if newActive is off-list
        recentlyScrolled = true;
        if ( newActive.offsetTop - list.scrollTop < 0 ) list.scrollTop = newActive.offsetTop;
      }
      //Prevent cursor from resetting to beginning of text input
      e.preventDefault();

    } else if (e.keyCode == 13) {
      //If enter key is pressed select current active as value of input
      if ( currActive ) currActive.click();
    }
  });

  function addActive(ele) {
    //Classify an item as "active"
    var parent = ele.parentNode;
    if ( !parent ) return false;

    //Start by removing the "active" class on all items
    removeActive(parent.childNodes);
    ele.classList.add("autocomplete-active");
  }

  function removeActive(list) {
    //Remove the "active" class from all autocomplete items
    for (var i = 0; i < list.length; i++) list[i].classList.remove("autocomplete-active");
  }

  function closeAllLists(ele) {
    //Close all autocomplete lists in the document, except the one passed as an argument:
    var list = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < list.length; i++) {
      if (ele != list[i] && ele != inp) {
        list[i].parentNode.removeChild(list[i]);
      }
    }
  }

  //execute a function when someone clicks in the document
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
};

function submit(){
  var  course, isSourceChecked, isTargetChecked, behaviour, interDepartmentOn, options = [];

  //Get values from Course text input
  course = document.getElementById("course-input").value;

  //If no course entered, do nothing
  if ( !course ) return;

  //Get values from Source-Target checkboxes
  isSourceChecked = document.getElementById("source").checked;
  isTargetChecked = document.getElementById("target").checked;

  //Check if course inputted is valid
  //Source -> 1, Target -> 0
  if ( isSourceChecked ) {
    //Check if course is valid
    if ( !(courses.includes(course)) ) raiseCourseError();
    else lowerCourseError();

    behaviour = 1;
  } else {
    //Check if course is valid
    if ( !(courses.includes(course)) ) raiseCourseError();
    else lowerCourseError();

    behaviour = 0;
  }

  //Get values from Prerequisites-Corequisites-Restrictions checkboxes
  if ( document.getElementById("prereqs").checked ) options.push('prereqs');
  if ( document.getElementById("coreqs").checked ) options.push('coreqs');
  if ( document.getElementById("restricts").checked ) options.push('restricts');

  //Get value of inter-department search checkbox, no need to error check
  interDepartmentOn = document.getElementById("inter-department").checked

  //If either list has none of its checkboxes checked, raise error message
  if ( options.length == 0 || (!isSourceChecked && !isTargetChecked) ) raiseOptionError();
  else lowerOptionError();

  //If no errors, generate new graph
  if ( document.getElementsByClassName("sys-msg")[0] ) return;
  else {
    instructions();
    legend();
    document.getElementById('cy').currCourse = course;
    DFS(course, behaviour, options, interDepartmentOn);
  };
};

function resubmit(){
  var inp = document.getElementById('course-input');
  var graph = document.getElementById('cy');

  if ( graph.currCourse == null || inp.value != graph.currCourse ) return;

  var behaviour;
  if ( document.getElementById("source").checked ) behaviour = 1;
  else behaviour = 0;

  var options = [];
  if ( document.getElementById("prereqs").checked ) options.push('prereqs');
  if ( document.getElementById("coreqs").checked ) options.push('coreqs');
  if ( document.getElementById("restricts").checked ) options.push('restricts');

  if ( options.length == 0 ) return;

  var interDepartmentOn = document.getElementById("inter-department").checked;

  instructions();
  legend();
  DFS(graph.currCourse, behaviour, options, interDepartmentOn);
};

function instructions(){
  var sidePanel, instructions;

  //Get side panel
  sidePanel = document.getElementById('side-panel-content')

  //Clear any course info already there
  sidePanel.removeChild(document.getElementById('course-info'));

  //Create intructions
  instructions = document.createElement('div');
  instructions.setAttribute('id', 'course-info');
  instructions.innerHTML = '<p>Click on courses to hide their content.</p>';
  instructions.innerHTML += '<p>Click and drag courses to move them around.</p>';
  instructions.innerHTML += '<p>Click and drag the background to move the entire graph.</p>';
  instructions.innerHTML += '<p>Scroll with mouse wheel/trackpad to zoom the graph.</p>';

  //Add instructions
  document.getElementById('side-panel-content').appendChild(instructions);
};

function legend(){
  var legend, legendElement;

  //Create legend container
  legend = document.createElement("div");
  legend.setAttribute("id", "legend");

  //Add content to legend
  legend.appendChild(legendElement("Prerequisites"));
  legend.appendChild(legendElement("Corequisites"));
  legend.appendChild(legendElement("Restrictions"));

  //Add legend to container
  document.getElementById('course-info').appendChild(legend);

  function legendElement(o) {
    var wrapper, dot, label;

    //Create wrapper for legend colour
    wrapper = document.createElement("div");
    wrapper.setAttribute("class", "legend-element-wrapper");

    //Create colour dot
    dot = document.createElement("span");
    dot.setAttribute("class", "legend-element");
    dot.setAttribute("id", "legend-" + o);

    //Create label for color
    label = document.createElement("span");
    label.setAttribute("class", "legend-text");
    label.innerHTML = o;

    //Wrap elements
    wrapper.appendChild(dot);
    wrapper.appendChild(label);

    return wrapper;
  };
};

function raiseOptionError(){
  //Check if error has already been raised
  if ( document.getElementById("sys-msg-opt") ) return;

  //If no error is already up, raise the error
  var slide = document.createElement("div");
  slide.appendChild(document.createTextNode("Make sure to choose a course behaviour and a type of connection!"));
  slide.setAttribute("class", "sys-msg");
  slide.setAttribute("id", "sys-msg-opt");

  var parent = document.getElementById("side-panel-content");
  parent.appendChild(slide);
};

function lowerOptionError(){
  var msg = document.getElementById("sys-msg-opt");
  if ( msg ) document.getElementById("side-panel-content").removeChild(msg);
};

function raiseCourseError(){
  //Check if error has already been raised
  if ( document.getElementById("sys-msg-crs") ) return;

  //If no error is already up, raise the error
  var slide = document.createElement("div");
  slide.appendChild(document.createTextNode("Could not find the course you selected!"));
  slide.setAttribute("class", "sys-msg");
  slide.setAttribute("id", "sys-msg-crs");

  var parent = document.getElementById("side-panel-content");
  parent.appendChild(slide);
};

function lowerCourseError(){
  var msg = document.getElementById("sys-msg-crs");
  if ( msg ) document.getElementById("side-panel-content").removeChild(msg);
};

window.addEventListener("load", function(){
  //Events for side panel size
  document.getElementById('collapse-button').addEventListener("click", collapseSidebar);
  document.getElementById('expand-button').addEventListener("click", expandSidebar);

  var srcButton = document.getElementById('source');
  var tarButton = document.getElementById('target');
  srcButton.other = tarButton;
  srcButton.addEventListener("change", toggle);
  tarButton.other = srcButton;
  tarButton.addEventListener("change", toggle);

  srcButton.addEventListener("change", resubmit);
  tarButton.addEventListener("change", resubmit);
  document.getElementById("prereqs").addEventListener("change", resubmit);
  document.getElementById("coreqs").addEventListener("change", resubmit);
  document.getElementById("restricts").addEventListener("change", resubmit);
  document.getElementById("inter-department").addEventListener("change", resubmit);

  autocomplete();

  document.getElementById('submit').addEventListener("click", submit);
});
