// require a library 
const mongoose =  require('mongoose');

// connect to the Database
// mongoose.connect('mongodb://127.0.0.1/todo_list');
mongoose.connect(
    "mongodb+srv://yashsonkar0102:7xGEP9DKPgujVjAd@todo-list.sisbonp.mongodb.net/?retryWrites=true&w=majority"
);

// acquire the connection
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'Error in Connecting to Database'));

// up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to the Database');
});