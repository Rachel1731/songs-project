const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const session = require('express-session');

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`connected to MongoDB ${mongoose.connection.name}.`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/", async (req, res) => {
  res.render("index.ejs")
});







 








  