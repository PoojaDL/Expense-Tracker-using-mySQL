const Sequilize = require("sequelize");

const sequelize = new Sequilize("node-complete", "root", "Pooja@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
