const express = require("express");

const weatherController = require("../controllers/weather");

const router = express.Router();

// Routes
router.get("/weather/:city", weatherController.getCityWeather);

module.exports = router;