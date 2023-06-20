const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require('./routes/pizzas.routes')
const db = require("./models/index");

const server = express();
const PORT = process.env.PORT || 8080;
server.set("port", PORT);

//Node Middlewares
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Routes
server.use('/pizza', routes)
/* server.get("/", (req, res) => {
    res.send("Hello World!");
  }); */

db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
    throw new Error(err.message)
  });  

server.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})




