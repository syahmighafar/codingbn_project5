let weather = {
    apiKey: "4fe27bcd36a12e322c92eab1c075259d",
    fetchWeather: function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {feels_like}=data.main;
        const {temp_min, temp_max} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = "Temperature " + temp + "°C"; 
        document.querySelector(".feels_like").innerText = "Feels Like " + feels_like + "°C";
        document.querySelector(".temp_max").innerText = "Max Temp " + temp_max + "°C"; 
        document.querySelector(".temp_min").innerText = "Min Temp " + temp_min + "°C"; 
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.getElementById("Brunei").addEventListener('click', function(){
    weather.fetchWeather("Brunei");
});

document.getElementById("Singapore").addEventListener('click', function(){
    weather.fetchWeather("Singapore");
});

document.getElementById("Kuala Lumpur").addEventListener('click', function(){
    weather.fetchWeather("Kuala Lumpur");
});

document.getElementById("Jakarta").addEventListener('click', function(){
    weather.fetchWeather("Jakarta");
});

document.getElementById("Manila").addEventListener('click', function(){
    weather.fetchWeather("Manila");
});

document.getElementById("Bangkok").addEventListener('click', function(){
    weather.fetchWeather("Bangkok");
});

document.getElementById("Phnom Penh").addEventListener('click', function(){
    weather.fetchWeather("Phnom Penh");
});

document.getElementById("Vientiane").addEventListener('click', function(){
    weather.fetchWeather("Vientiane");
});

document.getElementById("Yangon").addEventListener('click', function(){
    weather.fetchWeather("Yangon");
});

document.getElementById("Hanoi").addEventListener('click', function(){
    weather.fetchWeather("Hanoi");
});


document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Brunei");