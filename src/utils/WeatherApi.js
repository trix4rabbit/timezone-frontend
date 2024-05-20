import { APIkey } from "./Constants.js";

export const getForecastWeather = (latitude, longitude) => {

  console.log("getForecastWeather.latitude: " + latitude);
  console.log("getForecastWeather.longitude: " + longitude);

  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(parseResponse);

  return weatherApi;
};

const parseResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && Math.ceil(main.temp);
  const waether = {
    temperature: {
      f: `${Math.round(temperature)}`,
    },
  };
  return waether;
};

export const parseLocationData = (data) => {
  const locationName = data.name;
  return locationName;
};
