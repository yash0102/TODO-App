// require library
const mongoose = require('mongoose');

// create Schema(bluePrint) for Tasks

const taskSchema = new mongoose.Schema({
    description : {
        type: String,
        required: true,
    },
    category : {
        type: String,
        required: false,
    },
    dueDate : {
        type: String,
        required:false
    }
});

const TodoLists = mongoose.model('TodoLists',taskSchema);

module.exports = TodoLists;
