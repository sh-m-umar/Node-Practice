const { DATE } = require("sequelize");
const sequelize = require("sequelize");
const db = require("../../../config/postgre");

const User = db.define("user", {
  id: {
    type: sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  fname: {
    type: sequelize.STRING,
  },
  lname: {
    type: sequelize.STRING,
  },
  email: {
    type: sequelize.STRING,
  },
  password: {
    type: sequelize.STRING,
  },
  gender: {
    type: sequelize.STRING,
  },
  dob: {
    type: sequelize.DATE,
  }
});

module.exports = User;
