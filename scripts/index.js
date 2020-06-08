const API_KEY = './api-key.txt'
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=PxhlioWiRESGocNewW9mUftQQqbPmKWbP8Pksxrf'

const previousWeatherToggle = document.querySelector('.show-previous-weather');

const previousWeather = document.querySelector('.previous-weather')

previousWeatherToggle.addEventListener('click', () => {
    previousWeather.classList.toggle('show-weather')
})

getWeather()

function getWeather() {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}