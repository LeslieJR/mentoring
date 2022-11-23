const { Sequelize } = require('sequelize');
const dbconfig = require('../config/db.config')

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle
  },
  port: dbconfig.PORT
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pizza = require("./pizza.model.js")(sequelize, Sequelize);

module.exports = db;