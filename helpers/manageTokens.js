var jwt = require("jsonwebtoken");
const config = require("../config/config");
var moment = require('moment');

exports.createToken = function (user) {
var expire = moment().add(7, 'days').valueOf();
  var payload = {
    ...user,
    expire: expire,
  };

  var token = jwt.sign(payload, config.PRIVATE_KEY);
  return token;
};

exports.getTokenData = function (token) {
  return new Promise((resolve, reject) => {
    try {
      let payload = jwt.verify(token, config.PRIVATE_KEY);
      if (payload.expire <= Date.now() / 1000) {
        resolve({ status: false,  message: 'Token has expired' });
      } else {
        resolve({ payload: payload, status: true });
      }
    } catch (err) {
      reject({ message: err.message });
    }
  });
};
