const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const userRouter = require('../app/routes/user.routes')

module.exports = function() {
    const app = express();

    app.set('port', config.PORT);
    app.use(bodyParser.json());

    app.use('/user', userRouter);

    return app;
}