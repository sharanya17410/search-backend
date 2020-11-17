import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./routes/index.js";

const app = express();
const cors = require("cors");

/**
 * Middleware
 */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

// catch 500
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Error: ${err}`);
  next();
});

/**
 * Register the routes
 */

app.get("/doctor/details", (req, res) => {
  console.log(req.query);
  const users = [
    {
      first_name: "Jane",
      last_name: "Doe",
      speciality: "Dentist",
      city: "Bloomington",
    },
    {
      first_name: "John",
      last_name: "Doe",
      speciality: "Cardiologist",
      city: "Bloomington",
    },
    {
      first_name: "Arthur",
      last_name: "Doe",
      speciality: "Cardiologist",
      city: "Bloomington",
    },
  ];
  // We will be coding here
  res.json(users);
});
routes(app);

export default app;
