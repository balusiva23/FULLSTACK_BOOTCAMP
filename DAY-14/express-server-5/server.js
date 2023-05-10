const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("My First Express Server");
});

app.get("/hello",(req,res)=>{
    res.send("Hi from hello");
});
app.get("*",(req,res)=>{
    res.send("404 Page Not Found")
})
app.listen(4000,()=>{
console.log("server")
});