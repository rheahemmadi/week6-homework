let apiKey = "a561d4d1341478533d1f78eccc0485aa";

function showWeather(response) {
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let placeholder = document.querySelector("#replace");
  placeholder.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#temperature");
  let currentTemp = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${currentTemp}°C`;
}
function searchCity(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
function goSubmit(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city").value;
  searchCity(cityName);
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", goSubmit);
