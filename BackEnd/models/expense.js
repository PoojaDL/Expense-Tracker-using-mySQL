const Sequilize = require("sequelize");

const sequelize = require("../util/database");

const Expense = sequelize.define("expense", {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  expense: {
    type: Sequilize.BIGINT,
    allowNull: false,
  },
  description: {
    type: Sequilize.STRING,
    allowNull: false,
  },
});

module.exports = Expense;
