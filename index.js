const express = require('express');
const app = express();
const port = 8000;



// middleware

// added a parser, it signifies the middleware
app.use(express.urlencoded()); 




app.use('/', require('./routes'));// any request comes,



// listening request from express server
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});