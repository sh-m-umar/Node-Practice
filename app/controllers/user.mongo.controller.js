var User = require("../models/mongo/user.model");
var Token = require("../../helpers/manageTokens");

/************************************************
    Register New User
*************************************************/

exports.createUser = (req, res) => {
  var data = req.body;

  var newUser = new User({
    name: data.name,
    email: data.email,
    password: data.password,
  }).save((error, user) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send({ message: "User has been registered." });
    }
  });
};

/************************************************
    Login User
*************************************************/

exports.verifyUser = async (req, res) => {
  console.log("req.body: ", req.body);
  var data = req.body;

  var user = await User.findOne({ email: data.email });
  if (!user) {
    res.status(200).send({ message: "User not found." });
  } else {
    user.comparePassword(data.password, async (err, isMatch) => {
      if (isMatch) {
        var token = Token.createToken({
          id: user._id.toString(),
          email: user.email,
        });
        res.status(200).send({ message: "User logedIn successfully.", token });
      } else if (!isMatch) {
        res.status(400).send({ message: "User logedIn failed." });
      }
    });
  }
};

/************************************************
    Update User Information
*************************************************/

exports.updateUser = (req, res) => {
  if (req.user) {
    var data = req.body;

    User.findOneAndUpdate(
      { _id: req.user },
      {
        email: data.email,
        name: data.name,
      },
      { new: true },
      (error, user) => {
        if (error) {
          res.status(400).send({ status: false, message: error });
        } else {
          res.status(400).send({ status: true, user });
        }
      }
    );
  } else {
    res.status(200).send({ status: false, message: "Please Login first." });
  }
};
