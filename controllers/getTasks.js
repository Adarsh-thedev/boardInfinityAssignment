const Task = require("../models/task");

exports.getTasks = (req, res) => {
  let sortBy = createdAt;
  Task.find()
    .sort([[sortBy, "asc"]])
    .exec((err, tasks) => {
      if (!tasks || err) {
        return res.status(404).json({ error: "No tasks found" });
      }
      res.json(tasks);
    });
};
