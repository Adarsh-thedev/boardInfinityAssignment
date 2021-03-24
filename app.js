require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const taskRoutes = require("./routes/task");

//middlewares
app.use(express.json());
app.use(cors());

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

//my routes
app.use("/api", taskRoutes);

app.listen(8000, () => {
  console.log("app is running");
});
