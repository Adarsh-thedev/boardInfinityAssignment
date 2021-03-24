const express = require("express");
const router = express.Router();

const { addTask } = require("../controllers/addTask");
const { getTasks } = require("../controllers/agetTasks");

router.post("/api/add", addTask);
router.get("/api/list", getTasks);

module.exports = router;
