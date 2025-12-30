let btn = document.getElementById("button");
let inputEl = document.getElementById("locationInput").value;
let weather = document.getElementById("weatherBox");
let apiKey = "46f80a02ecae410460d59960ded6e1c6";
let temp = document.getElementById("temperature");
let city = document.getElementById("location");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  async function getWeatherData() {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputEl}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok ");
      }
      let data = await response.json();
      console.log(data);

      const temperature = Math.round(data.main.temp);

      const description = data.weather[0].description;

      const icon = data.weather[0].icon;
      weather.innerHTML = `
        <h2>Temperature: ${temperature}°C</h2>
        <p>Description: ${description}</p>
        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}" />
      `;
      temp.textContent = `${temperature}°C`;
      city.textContent = data.name;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
  getWeatherData();
});
