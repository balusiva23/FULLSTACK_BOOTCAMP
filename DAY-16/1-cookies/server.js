const  express  = require("express");

const app = express();

const cookies = require("cookie-parser");

app.use(cookies());
let user = {
    userType:1,
    userId:12,
    userName:"jack",
}

app.get("/",(req,res)=>{
    res.send("Api is working");
})

app.get("/set/cookie",(req,res)=>{

res.cookie("user",user);
res.send("cookie created");

});

app.get("/get/cookie",(req,res)=>{
    let user = req.cookies.user;
    res.send(user);
})

app.listen(4000,()=>{
    console.log("Running")
})