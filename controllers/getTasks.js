const Task = require("../models/task");

exports.getTasks = (req, res) => {
  Task.find().exec((err, tasks) => {
    if (!tasks || !tasks.length || err) {
      return res.status(404).json({ error: err });
    }
    res.json(tasks);
  });
};
