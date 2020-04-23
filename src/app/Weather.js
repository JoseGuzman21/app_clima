export class Weather {

  //este se ejecuta apenas la clase es instanciada
  constructor(city, countryCode) {
    //poder enviar junto con la peticion para que nos dean los datos
    this.apiKey = 'a8b95e68a2afc452cb6b4ada37d7a939';
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    //toma la cuidad el pais, y hace una peticion a internet
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},
    ${this.countryCode}&appid=${this.apiKey}&units=metric`;
    //utilizamos async await para que nos dea los datos
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }

}