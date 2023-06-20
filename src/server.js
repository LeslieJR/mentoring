import express from "express";
import morgan from "morgan";
import cors from "cors";
import json  from "body-parser";
import { routes } from './routes/pizzas.routes.js';

const server = express();
const PORT = process.env.PORT || 8080;
server.set("port", PORT);

//Node Middlewares
server.use(morgan("dev"));
server.use(cors());
server.use(json());

//Routes
server.use('/pizza', routes)
server.get("/", (req, res) => {
  res.send("Hello World!");
});

export default server;