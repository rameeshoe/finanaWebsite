// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var proCategoryFix = document.getElementById("proCategory");

// Get the offset position of the navbar
var sticky = proCategoryFix.offset: 10ch 8em;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    proCategoryFix.classList.add("sticky");
  } else {
    proCategoryFix.classList.remove("sticky");
  }
}