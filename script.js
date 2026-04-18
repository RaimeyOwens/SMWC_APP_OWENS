$(document).ready(function(){

  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Smooth scrolling
  $(".navbar a, footer a[href='#athleticsPage']").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });

  // ✅ CLEAR FORM ON SUBMIT (FIXED)
  $("#contactForm").on("submit", function(event) {
    event.preventDefault(); // stop refresh
    this.reset(); // clear inputs
  });

});