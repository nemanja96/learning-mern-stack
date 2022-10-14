const asyncHandler = require('express-async-handler');

// @desc    Get tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
    res.status(200).send("New Tasks");
})

// @desc    Set task
// @route   POST /api/tasks
// @access  Private
const setTask = asyncHandler(async (req, res) => {
    res.status(201).send("Post Task");
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