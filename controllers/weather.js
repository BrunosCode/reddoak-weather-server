// Npm Modules
const axios = require("axios");

exports.getCityWeather = async (request, response, next) => {
  let city = request.params.city;
  let apiKey = "567a30ac0bf63a04687e6450b6c7f1a9";

  try {
    const coordRes = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          lang: "it",
          appid: apiKey
        },
      }
    );
    const coord = await coordRes.data.coord;
    const weatherRes = await axios.get(
      "https://api.openweathermap.org/data/2.5/onecall",
      {
        params: {
          lat: coord.lat,
          lon: coord.lon,
          lang: "it",
          appid: apiKey
        },
      }
    );
    const weather = await weatherRes.data;

    response.status(200).json(weather);
  } catch (e) {
    console.log(e);
  }
};
