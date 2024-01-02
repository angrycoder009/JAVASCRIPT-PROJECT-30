const apiKeys = "400375695b818bb4f7cb5d0bd7b5514e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKeys}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " Km/h";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="weather-app-img/images/clouds.png";
    } else if(data.weather[0].main=="clear"){
        weatherIcon.src ="weather-app-img/images/clear.png";
    } else if(data.weather[0].main=="Smoke"){
        weatherIcon.src ="weather-app-img/images/clear.png";
    } else if(data.weather[0].main=="drizzle"){
        weatherIcon.src ="weather-app-img/images/drizzle.png";
    }else if(data.weather[0].main=="mist"){
        weatherIcon.src ="weather-app-img/images/mist.png";
    }
} 
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
}) 

