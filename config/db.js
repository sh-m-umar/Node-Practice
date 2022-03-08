const mongoose = require('mongoose');
const config = require('./config');

module.exports = function () {
    const db = mongoose.connect(config.db,
        {
            useNewUrlParser: true,
        });
    
    console.log('Successfully Connected To MongoDB.')

    mongoose.connection.on('error', (error) => {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`? ', error);
    });

    return db;
}