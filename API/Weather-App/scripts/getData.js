const apiKey = "400375695b818bb4f7cb5d0bd7b5514e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Bangalore"
export async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data)
}
