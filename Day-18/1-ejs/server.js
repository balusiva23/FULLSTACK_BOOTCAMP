const express = require("express");

const app = express();

const port = process.env.PORT || 4000

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    //res.send("Its Working");
    res.render("hello",{
        title:"Directly from server"
    })
})
app.listen(port,()=>{
    console.log("Server Running");
})