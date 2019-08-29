const express = require('express');
var app = new express();

app.get("/", function (request, response) {
    response.sendFile('/public/index.html', {root: __dirname});
});

app.get("/public/stylesheets/style.css", function (req, resp) {
    resp.sendFile('/public/stylesheets/style.css', {root: __dirname});
});

app.get("/public/imgs/me.jpg", function (req, resp) {
    resp.sendFile('/public/imgs/me.jpg', {root: __dirname});
});

app.listen(process.env.PORT || 8888);