function collapseSidebar(){
  document.getElementById("side-panel").style.width = "0";
  document.getElementById("expand-button").style.width = "auto";
  document.getElementById("main-panel").style.width = "100%";
  document.getElementById("cy").style.width = "100%";
}

function expandSidebar(){
  document.getElementById("main-panel").style.width = "80%";
  document.getElementById("cy").style.width = "auto";
  document.getElementById("side-panel").style.width = "20%";
  document.getElementById("expand-button").style.width = "0";
}
