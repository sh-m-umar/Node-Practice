const express = require('express');
const auth = require('../../config/middleware/authentication');
// const userController = require('../controllers/user.mongo.controller'); // for using MongoDB
const userController = require('../controllers/user.postgre.controller'); // for using PostgreSQL

var router = express.Router();

router.post('/signup', userController.createUser);
router.post('/signin', userController.verifyUser);
router.post('/updateuser', auth.requireAuthentication, userController.updateUser);
router.post('/getAllUsers', userController.getAllUsers);

module.exports = router;