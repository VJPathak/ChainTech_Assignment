const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task title is required'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
  category: {
    type: String,
    enum: ['Work', 'Personal', 'Other'],
    default: 'Other',
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
