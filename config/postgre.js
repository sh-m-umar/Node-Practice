const Sequelize = require("sequelize");

  const db = new Sequelize("test", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  db.authenticate()
    .then(() => {
      console.log("Database connected...");
    })
    .catch((error) => {
      console.log(`Error in DB Connection: ${error}`);
    });

  module.exports = db;
