var User = require("../models/mongo/user.model");
var Token = require("../../helpers/manageTokens");
var db = require("../../config/postgre");
var User = require("../models/postgre/user.model");

/************************************************
    Register New User
*************************************************/

exports.createUser = (req, res) => {
  var data = req.body;
};

/************************************************
    Login User
*************************************************/

exports.verifyUser = async (req, res) => {
  console.log("req.body: ", req.body);
  var data = req.body;
};

/************************************************
    Update User Information
*************************************************/

exports.updateUser = (req, res) => {
  if (req.user) {
    var data = req.body;
  }
};

exports.getAllUsers = (req, res) => {
  User.findAll()
  .then(
    (data) => {
      res.status(200).send(data)
    })
  .catch(
    (error) => {
      console.log('Error in getAllUsers: ', error);
    }
  )
};
