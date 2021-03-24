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
  process.env.DB,
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

app.listen(process.env.PORT || 8000, () => {
  console.log(`app is running on PORT ${process.env.PORT}`);
});
