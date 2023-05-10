const express = require('express');
const path = require("path");
const app = express();

//console.log(__dirname)

//console.log(path.resolve(__dirname,"html","index.html"))

//middleware --on top
//route --- "/images"
//set image
app.use("/images",express.static('images'));


app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"html","index.html"));
});

app.listen(4000,()=>{
    console.log("server")
    });