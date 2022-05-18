const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function (req, res) {
    const city = req.body.city;
    const apiKey = "2fc6f99ffbe08e2a71431f892ec30074";
    const unit = "metric";

    http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey + "&units=" + unit, function (response) {

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            res.write("<p>The Weather at " + city + " is " + weatherData.weather[0].description + "</p>");
            res.write("<h1>Temperature is " + weatherData.main.temp + "</h1>");
            res.write("<img src='http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png'>");
            res.send();
            // console.log(weatherData);

        });

    });
});










app.listen(3000);