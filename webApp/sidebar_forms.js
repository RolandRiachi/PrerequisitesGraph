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

function toggle(inp1, inp2){
  //Toggles between two options
  //Also prevents user from returning to state where neither option is checked
  inp1.checked = true;
  inp2.checked = false;
}

function submit(){
  var  course, isSourceChecked, isTargetChecked, options = [];

  //Get values from Course text input
  course = document.getElementById("course-input").value;

  //If no course entered, do nothing
  if ( !course ) return;

  //Get values from Source-Target checkboxes
  isSourceChecked = document.getElementById("source").checked;
  isTargetChecked = document.getElementById("target").checked;
  //If neither checkbox is checked, raise error message
  //Source -> 1, Target -> 0
  if ( !isSourceChecked && !isTargetChecked) {raiseErrorMsg(); return;}
  else if ( isSourceChecked ) options.push(1);
  else options.push(0);

  //Get values from Prerequisites-Corequisites-Restrictions checkboxes
  if ( document.getElementById("prereqs").checked ) options.push(1);
  else options.push(0);

  if ( document.getElementById("coreqs").checked ) options.push(1);
  else options.push(0);

  if ( document.getElementById("restricts").checked ) options.push(1);
  else options.push(0);

  //If none of the checkboxes are checked, raise error message
  if ( !options[1] && !options[2] && !options[3] ) {raiseErrorMsg(); return;}

  //If option has been inputted, lower the error and generate new graph
  if ( document.getElementById("sys-msg") ) lowerErrorMsg();
  //Call to prereq.js
};

function raiseErrorMsg(){
  //Check if error has already been raised
  if ( document.getElementById("sys-msg") ) return;

  //If no error is already up, raise the error
  var slide = document.createElement("div");
  slide.appendChild(document.createTextNode("Make sure to choose a course behaviour and a type of connection!"));
  slide.id = "sys-msg";

  var parent = document.getElementById("side-panel-content");
  parent.appendChild(slide);
}

function lowerErrorMsg(){
  //Remove error message now that everything is working
  document.getElementById("side-panel-content").removeChild(document.getElementById("sys-msg"));
}
