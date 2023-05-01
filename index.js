// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import cors from "cors";
import * as dotenv from 'dotenv'
import mobilesRouter from "./router/mobiles.router.js";
import usersRouter from "./router/users.router.js";
dotenv.config()
const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
// const MONGO_URL = "mongodb://127.0.0.1";
export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 Password Reset");
});

app.use(cors());
app.use(express.json());
app.use("/", mobilesRouter);
app.use("/", usersRouter);
//   http://localhost:5000/mobiles

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
