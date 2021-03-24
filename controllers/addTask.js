const Task = require("../models/task");

exports.addTask = (req, res) => {
  const task = new Task(req.body);
  task.save((err, task) => {
    if (!task || err) {
      //duplicate tasks
      if (err.code === 11000) {
        return res
          .status(400)
          .json("Please make sure the task is not dupicate");
      }
      //in case of db specific error
      else if (err.message) {
        return res.status(400).json({
          error: err.message,
        });
      }

      return res.status(400).json({
        message:
          "Unable to add task, please make sure you have added the required paramenters",
      });
    }
    res.json({
      success: true,
      message: `${task.name} has been created successfully and will expire after ${task.duration} minutes`,
      name: task.name,
      description: task.description,
      createdBy: task.createdBy,
      duration: task.duration,
      createdAt: task.createdAt,
    });
  });
};
