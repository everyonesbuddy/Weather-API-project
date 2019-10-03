class UI {
    constructor(){
        this.city = document.getElementById('w-city');
        this.country = document.getElementById('w-country');
        this.description = document.getElementById('w-description');
        this.temperature = document.getElementById('w-temperature');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather){
    
        this.city.textContent = weather[0].city_name;
        this.country.textContent = weather[0].country_code;
        this.description.textContent = weather[0].weather.description;
        this.temperature.textContent = `Temperature: ${weather[0].temp}`;
        this.humidity.textContent = `Relative humidity: ${weather[0].rh}`;
        this.feelsLike.textContent = `Feels Like: ${weather[0].clouds}`;
        this.dewpoint.textContent = `Dew Point : ${weather[0].dewpt}`;
        this.wind.textContent = `Wind: ${weather[0].wind_spd}`;
        
    }
}