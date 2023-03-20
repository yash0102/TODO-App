const express = require('express');
const app = express();
const port = 8000;


app.get('/',(req,res)=>{
    res.send('Hello World');
});

// listening request from express server
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});