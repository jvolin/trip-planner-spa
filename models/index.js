var Sequelize = require('sequelize');
var db = new Sequelize
('postgres://localhost:5432/trip-planner', {loging: true});

module.exports = {
  db: db
};