class Weather{
    constructor(city, state){
        this.apiKey = '49972fb7b6114c26b76122794d41920a';
        this.city = city;
        this.state = state;
    }
    //fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`);

        const responseData = await response.json();

        return responseData.data;
    }

    // change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}