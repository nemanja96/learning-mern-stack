const asyncHandler = require('express-async-handler');

const Task = require('../models/taskModel');

// @desc    Get tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
    let tasks = await Task.find();
    
    res.status(200).json(tasks);
})

// @desc    Set task
// @route   POST /api/tasks
// @access  Private
const setTask = asyncHandler(async (req, res) => {
    let task = await Task.findOne({ text: req.body.text });

    if(task) {
        return res.status(400).send('That task already exist')
    } else {
        task = new Task({
            text: req.body.text
        });
        await task.save();
        res.status(200).send(task);
    }
})

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
    res.status(200).send("Update Task");
})

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
    res.status(201).send("Delete Task");
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}