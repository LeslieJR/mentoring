import express from "express";
import morgan from "morgan";
import cors from "cors";
import { json } from "body-parser";
import { pizza } from './routes';

const server = express();
const PORT = process.env.PORT || 8080;
server.set("port", PORT);

//Node Middlewares
server.use(morgan("dev"));
server.use(cors());
server.use(json());

//Routes
server.use('/pizza', pizza)
server.get("/", (req, res) => {
  res.send("Hello World!");
});




export default server;