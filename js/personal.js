
var hamburger = document.querySelector(".hamburger");

$(document).ready(function(){

  // On hamburger click
  $(hamburger).on('click', function(){
      hamburger.classList.toggle("is-active");
      $('nav ul').toggleClass('show');
  });
});
