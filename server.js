const express = require('./config/express');
const app = express();
const mongoose = require('./config/db');
var db = mongoose();

var server = app.listen(app.get('port'), () => {
    console.log(`Listening to port ${app.get('port')}...`)
})