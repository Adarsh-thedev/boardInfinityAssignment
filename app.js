const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://localhost:27017/bi-test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected");
  }
);

app.listen(8000, () => {
  console.log("app is running");
});
