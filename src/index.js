"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 3333;
app.get('/', function (req, res) {
    return res.send('Hello World');
});
app.listen(PORT);
