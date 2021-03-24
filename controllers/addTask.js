const Task = require("../models/task");

exports.addTask = (req, res) => {
  const task = new Task(req.body);
  task.save((err, task) => {
    if (!task || err) {
      return res.status(400).json({
        message:
          "Unable to add task, please make sure you have added the required paramenters",
      });
    }
    res.json({
      name: task.name,
      description: task.description,
      createdBy: task.createdBy,
      duration: task.duration,
      createdAt: task.createdAt,
    });
  });
};
