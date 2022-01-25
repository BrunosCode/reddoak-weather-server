// IMPORT
// Npm Modules
const express = require("express");
const bodyParser = require("body-parser");

// Routes modules
const apiRoutes = require("./routes/api");

// APP
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: true})) // decoded request body

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow cross origin to access data
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE"); // allow to access methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // allow to define the content type and the autorizations
  next();
});

// Routes
app.use("/api", apiRoutes);

app.listen(8080);