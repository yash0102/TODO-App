const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String
    }
});

const Tasks = mongoose.model('Tasks',taskSchema);
module.exports = Tasks;