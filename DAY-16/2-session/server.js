const express = require("express");
const app = express();

const session = require("express-session");

app.use(session(
    {
        secret:"key",
        resave:true,//if client ans server break once reconnect its recover
        saveUninitialized:true,// if session not null instead of empty
    }
));

app.get("/",(req,res)=>{
    res.send("Api is working");

});

//req store and return req

app.get("/set/:value",(req,res)=>{
    req.session.name = req.params.value;
    res.send(req.params.value);
});

app.get("/get/session",(req,res)=>{
    let name = req.session.name;
    res.send(name);
})

app.listen(4001,()=>{
    console.log('Server is running');
});