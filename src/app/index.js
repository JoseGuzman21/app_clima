//importando la clase weather
const { Weather } = require('./Weather')
const { UI } = require('./UI');
const { Store } = require('./store');

const ui = new UI();
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);


require('./index.css');

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  //Creando variables
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value;
  console.log(city + countryCode);
  weather.changeLocation(city, countryCode);
  store.setLocationData(city, countryCode);
  fetchWeather();
  //esto hace que no recargue la pagina
  e.preventDefault();
});

//cuando se ejecuta la pagina
document.addEventListener('DOMContentLoaded', fetchWeather);