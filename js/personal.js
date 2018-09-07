
var hamburger = document.querySelector(".hamburger");
var topNav = document.getElementById("myTopnav");

// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
    } else {
    topNav.className = "topnav";
    }
});