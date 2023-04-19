const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const server = require("./config/server");
const cors = require("cors");
const routes = require('./routes/routes');
require("dotenv").config();
////////////////////////////////////////
const app = express();
app.use(bodyParse.json());
app.use(
  cors({
    origin: [
      `http://localhost:2121||${process.env.PORT}`,
      `http://${process.env.IPV4}:2121||${process.env.PORT}`,
    ],
  })
);
app.use(routes.fileRouter);
server(app);
