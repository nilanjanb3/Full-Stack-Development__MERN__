const express = require("express");
const app = express();


app.get("/", function (req, res) {
    // res.send("<h1>Hello</h1>");
    res.sendFile(__dirname + "/DOM/index.html");
});


app.listen(3000);