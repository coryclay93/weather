//created a weather variable with an object that has a function to fetch the temperature of random citys using json
// created another function to give the data information value. once value is given a query selector the innerText returns the text content.
let weather = {
   "apiKey": "8e4f52da7f27ef15b8b9f33f0f8ea000",
   fetchWeather: function (city) {
       fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
       )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
   },
   displayWeather: function(data) {
     const {name} = data;
     const {icon, description} = data.weather[0];
     const {temp, humidity} = data.main;
     const {speed} = data.wind;
     document.querySelector(".city"). innerText = "Weather in " + name
     document.querySelector(".icon"). src= "https://openweathermap.org/img/wn/"+ icon + ".png"
     document.querySelector(".description").innerText = description
     document.querySelector(".temp").innerText = temp + "°F"
     document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
     document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

//event listener when search button is pressed
document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
})

//event listener when enter key is pressed
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search()
    }
})

//default weather
weather.fetchWeather("charlotte");