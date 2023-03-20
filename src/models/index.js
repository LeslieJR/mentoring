const { Sequelize } = require('sequelize');
const dbconfig = require('../config/db.config')

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.PGHOST,
  dialect: dbconfig.dialect,
  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle
  },
  port: process.env.POSTGRES_PORT
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pizza = require("./pizza.model.js")(sequelize, Sequelize);

module.exports = db;