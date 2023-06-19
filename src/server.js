const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require('./routes')

const server = express();
const PORT = process.env.PORT || 8080;
server.set("port", PORT);

//Node Middlewares
server.use(morgan("dev"));
server.use(cors());
server.use(bodyParser.json());

//Routes
server.use('/pizza', routes.pizza)
/* server.get("/", (req, res) => {
    res.send("Hello World!");
  }); */


const db = require("./models/index");
  
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

module.exports = server;
