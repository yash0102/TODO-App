
const TodoLists = require('../models/task');

// rendering the home page
module.exports.home = async (req ,res)=>{
    // console.log('fetching mongoose');

    // fetching mongoose
   try{ 
        let todo = await TodoLists.find({});                      
        return res.render('home', {
            title: 'TODOList',
            todoList:todo
        });

    } catch (err) {
       console.log("Error", err);
       return;
    }
}


// format the date properly to store in database
const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"
];

function formatDate(dueDate) {
    if(dueDate.length == 0) {
        return "NO DEADLINE";
    }

    const date = new Date(dueDate);
    return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

  

// function for creating todo list
module.exports.create = async (req, res) => {
    try {
        // Create new todo and store in DB
        
        const newTodo = await TodoLists.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: formatDate(req.body.dueDate)
            
        });

        // Redirect to home page
        return res.redirect("/");
    } catch (err) {
        console.log("Error in creating Todo list !");
        return;
    }
}


// utility function to delete a single task
function deleteOne(task) {
    return TodoLists.findByIdAndDelete(task).exec();
}

// function to delete the tasks from the database
function deleteTasks(tasks) {
    if(typeof tasks == 'string') {
        deleteOne(tasks);
    }
    else {
        for(let task of tasks) {
            deleteOne(task);
        }
    }
}


// deleting tasks from the database
module.exports.delete = async function(req, res) {
    var obj = req.body;
    console.log(req.body);

    if(obj && Object.keys(obj).length == 0
        && Object.getPrototypeOf(obj) === Object.prototype)
        return res.redirect('back');

    var result = await deleteTasks(req.body.tasks);

    return res.redirect('back');
}
