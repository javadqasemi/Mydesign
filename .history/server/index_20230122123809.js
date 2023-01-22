import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/*Routers import configuration*/
import clientRouters from "./routers/client.js";
import generalRouters from "./routers/.js";
import clientRouters from "./routers/client.js";
import clientRouters from "./routers/client.js";

/*configuration*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*router configuration*/
app.use("/client", clientRouters);
app.use("/general", generalRouters);
app.use("management", managementRouters);
app.use("/sales", salesRouters);
