const weatherData = {
    'ahmedabad': { temp: 40, description: 'Hot and sunny' },
    'mumbai': { temp: 32, description: 'Humid and cloudy' },
    'delhi': { temp: 28, description: 'Partly cloudy' },
    'bangalore': { temp: 25, description: 'Pleasant and cool' },
    'chennai': { temp: 35, description: 'Hot and humid' },
    'kolkata': { temp: 30, description: 'Warm and humid' },
    'pune': { temp: 27, description: 'Mild and pleasant' },
    'hyderabad': { temp: 33, description: 'Hot and dry' },
    'jaipur': { temp: 38, description: 'Very hot and dry' },
    'surat': { temp: 37, description: 'Hot and humid' },
    'rajkot': { temp: 18, description: 'Cool and rainy' },
    
};

const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');

function getWeather() {
    const city = cityInput.value.trim().toLowerCase();
    
    if (!city) {
        weatherResult.textContent = 'Please enter a city name';
        weatherResult.className = 'error-message';
        return;
    }
    
    if (weatherData[city]) {
        const weather = weatherData[city];
        weatherResult.textContent = `The weather in ${capitalizeFirstLetter(city)} is ${weather.temp}°C`;
        weatherResult.className = 'weather-result';
    } else {
        weatherResult.textContent = `Weather data not available for ${capitalizeFirstLetter(city)}`;
        weatherResult.className = 'error-message';
    }
}

function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

getWeatherBtn.addEventListener('click', getWeather);

cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    getWeather();
});