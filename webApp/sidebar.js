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

function autocomplete() {
  //Text field
  var inp = document.getElementById("course-input");

  //Array of suggestions to consider (PLACEHOLDER FOR NOW)
  var arr = [];
  for (var i = 0; i < 100; i++) {
    arr.push("MATH " + i);
  }

  //Number of suggestions to display
  var numSuggestionsShown = 10;
  //If "active" suggestion was recently scrolled with arrow keys
  var recentlyScrolled = false;

  //execute a function when someone writes in the text field
  inp.addEventListener("input", function(e) {
      var list, item, i, numResults, val = this.value;
      //close any already open lists of autocompleted values
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      //create a DIV element that will contain the items (values)
      list = document.createElement("DIV");
      list.setAttribute("id", "autocomplete-list");
      list.setAttribute("class", "autocomplete-items");
      //append the DIV element as a child of the autocomplete container:
      this.parentNode.appendChild(list);
      //for each item in the array
      for (i = 0; i < arr.length; i++) {
        //Check if the text field value is a substring of the item
        n = arr[i].toUpperCase().indexOf(val.toUpperCase());
        //Add 1 to include subtrings starting at beginning of item
        if ( n + 1 ){
          //create a DIV element for each matching element:
          item = document.createElement("DIV");
          //make the matching letters bold:
          item.innerHTML = arr[i].substr(0, n);
          item.innerHTML += "<strong>" + arr[i].substr(n, val.length) + "</strong>";
          item.innerHTML += arr[i].substr(n + val.length);
          //insert a input field that will hold the current array item's value:
          item.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          //Insert the value for the complete text field when someone clicks on the item value (DIV element):
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
          list.appendChild(item);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    //Check if autosuggestion box is open
    var list = document.getElementById("autocomplete-list");
    if ( list ) listHeight = list.offsetHeight;
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
  if ( !isSourceChecked && !isTargetChecked) {
    raiseErrorMsg();
    return;
  }
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
  if ( !options[1] && !options[2] && !options[3] ) {
    raiseErrorMsg();
    return;
  }

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