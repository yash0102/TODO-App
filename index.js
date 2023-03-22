const express = require('express');
const app = express();
const port = 8000;

// middleware

// added a parser, it signifies the middleware
app.use(express.urlencoded()); 

// for getting static files
app.use(express.static("assets"));

app.use(expressLayout);

// set template/view engine
app.set("view engine", "ejs");
app.set("views", "./views");




// Returning response from the server
app.get('/',(req,res)=>{
    res.render('index', {
        title: 'TODOList'
    });
});

app.get

// listening request from express server
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});