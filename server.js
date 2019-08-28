const express = require('express');
var app = new express();
var cors = require('cors');

app.get("/", function (request, response) {
    response.sendFile('/public/index.html', {root: __dirname});
});

app.get("/public/stylesheets/style.css", function (req, resp) {
    resp.sendFile('/public/stylesheets/style.css', {root: __dirname});
});