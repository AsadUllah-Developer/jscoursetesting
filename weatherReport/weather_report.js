const apiKey = '3e04cab1c6f59c4a92535f237577240d'; // Your OpenWeatherMap API key

// Weather by City
document.getElementById('cityWeatherForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const city = document.getElementById('city').value.trim();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById('cityWeatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('cityWeatherInfo').innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
});

// Weather by Latitude and Longitude
document.getElementById('latLonWeatherForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const latitude = document.getElementById('latitude').value.trim();
  const longitude = document.getElementById('longitude').value.trim();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById('latLonWeatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather Report</h2>
        <p>Location: ${data.name || 'N/A'}</p>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('latLonWeatherInfo').innerHTML = `<p>Error fetching weather data. Please check your inputs or try again later.</p>`;
    });
});
