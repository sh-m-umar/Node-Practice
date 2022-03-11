const express = require('./config/express');
const app = express();

// for using MongoDB
// const mongoose = require('./config/mongo');
// var db = mongoose();

// for using PostgreSQL
const postgres = require('./config/postgre');
// var db = postgres;


var server = app.listen(app.get('port'), () => {
    console.log(`Listening to port ${app.get('port')}...`)
})