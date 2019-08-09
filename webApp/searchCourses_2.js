function autocomplete(inp, arr) {
  //the autocomplete function takes two arguments, the text field element and an array of possible autocompleted values:
  var currentFocus;
  //execute a function when someone writes in the text field:
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
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          //create a DIV element for each matching element:
          item = document.createElement("DIV");
          //make the matching letters bold:
          item.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          item.innerHTML += arr[i].substr(val.length);
          //insert a input field that will hold the current array item's value:
          item.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          //execute a function when someone clicks on the item value (DIV element):
          item.addEventListener("click", function(e) {
            //insert the value for the autocomplete text field:
            inp.value = this.getElementsByTagName("input")[0].value;
            //close the list of autocompleted values, or any other open lists of autocompleted values:
            closeAllLists();
          });
          item.addEventListener("mouseover", function(e) {
            addActive(this);
          })
          list.appendChild(item);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    //Check if autosuggestion box is open
    var list = document.getElementById("autocomplete-list");
    if ( list ) list = list.getElementsByTagName("div");
    else return;

    //Get current active element
    var currActive = document.getElementsByClassName("autocomplete-active")[0]

    //Scroll if up/down, select value if enter
    if (e.keyCode == 40) {
      //If down key is pressed, make next node "active", stopping at the last node in the list
      //If nothing is active, make first node active
      if ( currActive && currActive.nextSibling ) addActive(currActive.nextSibling);
      else if ( !currActive ) addActive(list[0]);

    } else if (e.keyCode == 38) {
      //If up key is pressed, make previous node "active", stopping at first node in the list
      //If nothing is pressed, do nothing
      if ( currActive && currActive.previousSibling ) addActive(currActive.previousSibling);
      //Prevent cursor from resetting to beginning of text input
      e.preventDefault();

    } else if (e.keyCode == 13) {
      //If enter key is pressed select current active as value of input
      if ( currActive ) currActive.click();
    }
  });
  function addActive(ele) {
    /*a function to classify an item as "active":*/
    var parent = ele.parentNode ;
    if ( !parent ) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(parent.childNodes);
    ele.classList.add("autocomplete-active");
    // if (currentFocus >= x.length) currentFocus = 0;
    // if (currentFocus < 0) currentFocus = (x.length - 1);
    // /*add class "autocomplete-active":*/
    // x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(list) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < list.length; i++) {
      list[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(ele) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var list = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < list.length; i++) {
      if (ele != list[i] && ele != inp) {
        list[i].parentNode.removeChild(list[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
