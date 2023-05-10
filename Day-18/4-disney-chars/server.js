const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const https = require("https");


app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req,res)=>{
    const id = req.body.characterid;
    const url = `https://api.disneyapi.dev/character/${id}`;
     //console.log(req.body.characterid);
     //console.log(url);
    https.get(url,(response)=>{
     response.on("data",(data)=>{
        const characterInfo  = JSON.parse(data);
        res.render("result",{
            name:characterInfo.data.name,
            imgURL:characterInfo.data.imageUrl
        });
        console.log(characterInfo.data.name);
        console.log(characterInfo.name);
     })
    })

})

app.listen(4001,()=>{
    console.log("Server is Running");
})