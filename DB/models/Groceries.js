// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Groceries = sequelize.define("groceries", {
  food_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  food_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Syncs with DB
Groceries.sync();

module.exports = Groceries;
