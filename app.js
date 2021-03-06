require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const taskRoutes = require("./routes/task");

//middlewares
app.use(express.json());
app.use(cors());

//can be used locally as well as with the url
mongoose.connect(
  process.env.DB || "mongodb://localhost:27017/bi-test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("DB Connected");
  }
);

//my routes
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`app is running on PORT ${process.env.PORT}`);
});
