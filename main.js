const apiKey = "5c831fabe65c5e9e66a701fa87c98abf";// Weather API Key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var result = await response.json();

        document.querySelector(".city").innerHTML = result.name;
        document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°C";

        if(result.weather[0].main == "Clouds"){
            weatherIcon.src = "image/cloud.png";
        }
        else if(result.weather[0].main == "Clear"){
            weatherIcon.src = "image/clear.png";
        }
        else if(result.weather[0].main == "Rain"){
            weatherIcon.src = "image/rain.png";
        }
        else if(result.weather[0].main == "Mist"){
            weatherIcon.src = "image/mist.png";
        }
        else if(result.weather[0].main == "Drizzle"){
            weatherIcon.src = "image/drizzle.png";
        }
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
