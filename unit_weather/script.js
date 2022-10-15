
const weatherIcon = document.querySelector(".weather-icon");

const temperature = document.querySelector(".temperature");

const weatherDescription = document.querySelector(".clouds");

const city = document.querySelector(".city");

const wind = document.querySelector(".wind");

const humidity = document.querySelector(".humidity");

const goButton = document.querySelector('button');

const country = document.querySelector('.country');

city.value = localStorage.getItem("city") || "moscow";

async function getWeather() {

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=&appid=e232c2c3b92f166cce51ebd019113d1d&units=metric`;

	const res = await fetch(url);

	const data = await res.json();

	country.textContent = data.sys.country;

	temperature.innerHTML = ` ${Math.round(data.main.temp)}&deg;`;

	weatherDescription.textContent = data.weather[0].description;

	weatherIcon.className = "weather-icon owf";

	weatherIcon.classList.add(`owf-${data.weather[0].id}`);

	wind.textContent = `${Math.round(data.wind.speed)} m/s`;

	humidity.textContent = `${Math.round(data.main.humidity)}%`

	console.log(data);

	localStorage.setItem("city", city.value);
}

goButton.addEventListener("click", getWeather);

document.addEventListener('DOMContentLoaded', getWeather)