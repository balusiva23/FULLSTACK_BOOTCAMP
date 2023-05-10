const express = require("express");
const bodyParser = require('body-parser')
const app = express();
//Middle ware
// function handleMiddle(req,res,next){
//     //console.log("Milldeware");
//     next();
// }

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/html/index.html");
})

app.post("/data",(req,res)=>{
    const num1  = Number(req.body.num1);
    const num2  = Number(req.body.num2);
    res.send(`<h1>The result is ${num1 + num2}</h1>`);
    console.log(req.body);
})

app.listen(4000,()=>{
    console.log("Server is upp and running");
})