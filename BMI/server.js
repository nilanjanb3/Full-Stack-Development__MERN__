const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/DOM/index.html");
});

app.post("/", function (req, res) {
    // console.log(req.body);
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var BMI = weight * Math.pow(100, 2) / Math.pow(height, 2);

    res.send("your bmi is " + BMI.toFixed(2));
});


app.listen(3000);