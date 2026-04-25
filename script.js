$(document).ready(function(){

  // ✅ Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // ✅ Smooth scrolling
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

  // ✅ Clear form on submit
  $("#contactForm").on("submit", function(event) {
    event.preventDefault();
    this.reset();
  });

  // 🌤 WEATHER API
  const apiKey = "b09b2d0a5e48f3248b45e7e9d7f1138a"; 
  const city = "Terre Haute"; 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      console.log(data); // helps debug if something breaks

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      const temp = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      document.getElementById("weatherText").innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        <br>
        <strong>${temp}°F</strong><br>
        ${description}
      `;

    })
    .catch(error => {
      document.getElementById("weatherText").innerHTML =
        "Unable to load weather.";
      console.error("Weather error:", error);
    });

});