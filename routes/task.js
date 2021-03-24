const express = require("express");
const router = express.Router();

const { addTask } = require("../controllers/addTask");
const { getTasks } = require("../controllers/getTasks");

router.post("/add", addTask);
router.get("/list", getTasks);

module.exports = router;
