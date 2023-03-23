// requiring modules
const express = require('express');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');



// middleware

// added a parser, it signifies the middleware
app.use(express.urlencoded()); 

// for getting static files
app.use(express.static("assets"));

app.use(expressLayout);

//extract style and script from sub pages into layout 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// set template/view engine
app.set("view engine", "ejs");
app.set("views", "./views"); // by default it's name is 'view' we can change using this



app.use('/', require('./routes'));// any request comes,



// listening request from express server
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});