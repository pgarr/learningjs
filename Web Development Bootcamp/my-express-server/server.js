const express = require("express");

const app = express();

app.get("/", function(req, res){
    response.send("<h1>Hello world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: piotrek@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Jestem fajny");
});

app.get("/hobbies", function(req, rus){
    res.send("<ul>Coffee<li><ul>Beer<li><ul>Games<li>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});