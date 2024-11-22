const Task = require('../models/taskModel');

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category } = req.body;

    // Validate required fields
    if (!title.trim()) {
      return res.status(400).json({ message: 'Task title is required and cannot be empty' });
    }

    const newTask = await Task.create({ title, description, dueDate, category });
    res.status(201).json({
      message: 'Task created successfully',
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  }
};

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (tasks.length === 0) {
      return res.status(404).json({ message: 'No tasks found' });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve tasks', error: error.message });
  }
};

// Get a single task
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve task', error: error.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Find the task
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Prevent re-completing already completed tasks
    if (updates.completed && task.completed) {
      return res.status(400).json({ message: 'Task is already marked as completed' });
    }

    // Update the task
    const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({
      message: 'Task updated successfully',
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task', error: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
};

// Mark a task as completed
exports.completeTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.completed) {
      return res.status(400).json({ message: 'Task is already marked as completed' });
    }

    task.completed = true;
    await task.save();

    res.status(200).json({
      message: 'Task marked as completed successfully',
      task,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to mark task as completed', error: error.message });
  }
};
