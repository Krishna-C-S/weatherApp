


var inputBox = document.querySelector("#inputId")
function fetchSearch() {
  let inputData = inputBox.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).then(res => res.json()).then(data => populateWeather(data))

}

function populateWeather(data) {

  // temp
  let temp = data.main.temp
  // tempMax
  let tempMax = data.main.temp_max
  // tempMin
  let tempMin = data.main.temp_min
  // pressure
  let pressure = data.main.pressure
  // humidity
  let hum = data.main.humidity
  // wind
  let wind = data.wind.speed
  // main
  let main = data.weather[0].main
  console.log(main);
  // description
  let description = data.weather[0].description
  // icon
  let icon = data.weather[0].icon
  const icons = `http://openweathermap.org/img/wn/${icon}.png`
  // visibility
  let visibility = data.visibility
  // placename
  let placeName = data.name

  var today = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var date = today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
  var hours = today.getHours()
  hours = (hours % 12) || 12
  var time = hours + ":" + today.getMinutes();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var day = days[today.getDay()]

  let htmlData = ``
  htmlData += `
<div class="col-lg-4 col-md-4 col-sm-4"></div>
<div class="col-lg-4 col-md-4 col-sm-4 text-center mt-4">
<i class="fa-solid fa-location-dot d-inline" style="color:white;"></i> <h3 class="d-inline" style="color:white;">${placeName}</h3>
<div class="dateTime mt-4" style="color:white">
<h1>${time},${day}</h1>
<h6>${date}</h6>

</div>
</div>
<div class="col-lg-4 col-md-12 col-sm-4 "></div>
<div class="container-fluid text-center mb-5" style="margin-top:5%;color:black;background-color: rgba(255, 255, 255, 0.5);border-radius:1rem;width:60rem;">
<div class="row">
<div class="col-lg-6 col-md-12 col-sm-6 mt-5">
<h1>${temp}&#8451</h1>
<p>${tempMin}&#8451/${tempMax}&#8451</p>
</div>
<div class="col-lg-6 col-md-12 col-sm-6">
<img src="${icons}">
<h2>${main}</h2>
<p>${description}</p>
</div>
<hr>
</div>
<div class="row">
<div class="col-lg-4 col-md-12 col-sm-4"></div>
<div class="col-lg-4 col-md-12 col-sm-4">
<h5>Weather details</h5>
</div>
<div class="col-lg-4 col-md-12 col-sm-4"></div>
</div>
<div class="row">
<div class="col-lg-4 col-md-12 col-sm-4 mt-5">
<div class="element">
<h6>${visibility} km</h6>
<p class="text-muted">Visibility</p>
</div>
<div class="element mt-5">
<h6>${wind} km/h</h6>
<p class="text-muted">Wind</p>
</div>

</div>
<div class="col-lg-4 col-md-12 col-sm-4">
</div>
<div class="col-lg-4 col-md-12 col-sm-4">
<div class="element mt-5">
<h6>${pressure} hPa</h6>
<p class="text-muted">Air Pressure</p>
</div>
<div class="element mt-5">
<h6>${hum}%</h6>
<p class="text-muted">Humidity</p>
</div>
</div>
</div>
</div>

`
  view.innerHTML = htmlData
}
