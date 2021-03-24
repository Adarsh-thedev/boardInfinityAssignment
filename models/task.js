const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  creator: {
    type: String,
    required: true,
    maxlength: 32,
  },
  duration: {
    type: Number,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
