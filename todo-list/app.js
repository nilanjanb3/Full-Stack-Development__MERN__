//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const day = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

let listItems = ["Buy Food", "Eat Food", "Cook Food"];
let workItems = [];
let heading = "";
let action = "";

app.get("/", function (req, res) {

    heading = day.getDate();
    action = "/";
    res.render("list", { heading: heading, items: listItems, action: action });

});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    listItems.push(item);
    res.redirect("/");
});


app.get("/work", function (req, res) {
    heading = day.getDay();
    action = "/work";
    res.render("list", { heading: heading, items: workItems, action: action });
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});



app.listen(3000, function () {
    console.log("Server started on port 3000.");
});