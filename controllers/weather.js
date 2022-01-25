// Npm Modules
const axios = require("axios");

exports.getCityWeather = (request, response, next) => {
  let coord = {};
  let city = request.params.city;
  let weather = {};
  let apiKey = "567a30ac0bf63a04687e6450b6c7f1a9";

  axios
    .get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        lang: "it",
        appid: apiKey,
      },
    })
    .then((res) => {
      coord = res.data.coord;
      //console.log(coord);
    })
    .then(() => {
      axios
        .get("https://api.openweathermap.org/data/2.5/onecall", {
          params: {
            lat: coord.lat,
            lon: coord.lon,
            lang: "it",
            appid: apiKey,
          },
        })
        .then((res) => {
          //console.log(res);
          weather = res.data;
        })
        .then(() => {
          response.status(200).json(weather);
        });
    })
    .catch((e) => {
      console.log(e);
    });
};
