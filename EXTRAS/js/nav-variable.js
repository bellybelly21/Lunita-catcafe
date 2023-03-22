var header = document.getElementById("navbar");
var navtext = header.getElementsByClassName("navtext");
for (var i = 0; i < navtext.length; i++) {
  navtext[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
