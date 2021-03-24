const express = require("express");
const router = express.Router();

const { addTask } = require("../controllers/addTask");
const { getTasks } = require("../controllers/agetTasks");

module.exports = router;
