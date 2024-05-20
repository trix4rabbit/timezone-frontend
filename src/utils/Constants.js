export const APIkey = "a3385016c10afa18a9a807f90960ffc5";

// Pasadena [49.0167, -57.5984]
export const latitude = 49.0167;
export const longitude = -57.5984;
export const day = true;

export const weatherCondition = [
  {
    url: require("../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/rain.svg").default, day: true, type: "rain" },
  {
    url: require("../images/day/storm.svg").default,
    day: true,
    type: "storm",
  },
  { url: require("../images/day/snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/night/clearnight.svg").default,
    day: false,
    type: "clearnight",
  },
  {
    url: require("../images/night/cloudynight.svg").default,
    day: false,
    type: "cloudynight",
  },
  {
    url: require("../images/night/rainynight.svg").default,
    day: false,
    type: "rainynight",
  },
  {
    url: require("../images/night/stormnight.svg").default,
    day: false,
    type: "stormnight",
  },
  {
    url: require("../images/night/snownight.svg").default,
    day: false,
    type: "snownight",
  },
  {
    url: require("../images/night/fognight.svg").default,
    day: false,
    type: "fognight",
  },
];
