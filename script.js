// Fetching API 
let weather = {
    "apiKey": "e089c0dea6cae0a438fb346f3fe8ad66",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&units=metric&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"

        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading")

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

// search button
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();

});

// search bar-Enter
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Republic of India");

// let image = new image()

// const width = document.getElementById('width')
// const height = document.getElementById('height')

// image.onload = function (city) {
//     width.innerHTML = this.width
//     height.innerHTML = this.height
// }
