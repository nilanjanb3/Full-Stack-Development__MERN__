/*jshint esversion:6 */
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    // console.log(req);
    res.send("<h1>Hello</h1>");
});

app.get("/demo", function (req, res) {
    // console.log(req);
    res.send("<h1>Demo</h1>");
});



app.listen(3000, function () {
    console.log("Server started at 3000");
});
