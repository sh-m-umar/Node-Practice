const express = require('express');
const auth = require('../../config/middleware/authentication');
const userController = require('../controllers/user.controller');

var router = express.Router();

router.post('/signup', userController.createUser);
router.post('/signin', userController.verifyUser);
router.post('/updateuser', auth.requireAuthentication, userController.updateUser);

module.exports = router;