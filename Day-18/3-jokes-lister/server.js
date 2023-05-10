const express = require("express");
const https = require("https");
const app = express();
const port = process.env.PORT || 4000

app.set("view engine","ejs");

app.get('/',(req,res)=>{
  https.get("https://api.chucknorris.io/jokes/random",(response)=>{
    response.on("data",(data)=>{
        const jokesData = JSON.parse(data);
        res.render("content",{
            joke:jokesData.value
        })
    })
  });
})


app.listen(port,()=>{
    console.log("Server Running");
})