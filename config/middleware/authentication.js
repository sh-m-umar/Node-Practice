var Token = require("../../helpers/manageTokens");

exports.requireAuthentication = function (req, res, next) {
  var token = req.headers.token;

  if (
    token === "null" ||
    token === "undefined" ||
    token === undefined ||
    token === null
  ) {
    req.auth = false;
    next();
    return;
  }

  try {
    Token.getTokenData(token)
      .then((result) => {
        if (result.status) {
          req.user = result.payload.id;
          next();
        } else {
          return res.json({
            message: result.message,
            success: false,
          });
        }
      })
      .catch((data) => {
        return res.json({
          message: "Token invalid",
          success: false,
        });
      });
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }
};
