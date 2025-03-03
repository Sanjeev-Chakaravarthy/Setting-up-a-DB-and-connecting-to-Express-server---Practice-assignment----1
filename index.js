const express = require("express");
const mongoose = require("mongoose")
const { resolve } = require("path");
require('dotenv').config()

const app = express();
const port = 3010;

app.use(express.static("static"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection successfull"))
  .catch((err) => console.log("MongoDB connection failed", err));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
