const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { url } = require("inspector");
const { resolveSoa } = require("dns");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }


        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us11.api.mailchimp.com/3.0/lists/7bdb69e5f8";
    const option = {
        method: "POST",
        auth: "nilanjan:225e1364cd1a5574929ca6e4315e7e4d-us11"

    };


    const request = https.request(url, option, function (response) {
        // response.on("data", function (data) {
        //     console.log(JSON.parse(data));
        // });
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }
    });

    request.write(jsonData);
    request.end();

    // console.log(fName, lName, email);
});

app.post("/failure", function (req, res) {
    res.redirect("/");
});










app.listen(3000, function () {
    console.log("server is up & running @3000");
});

// API KEY 225e1364cd1a5574929ca6e4315e7e4d-us11

// LIST ID 7bdb69e5f8