const express = require("express");
//jwt token
const jwt = require("jsonwebtoken");
const app = express();
const users = require("./users.json")
const cars = require("./cars.json")

const secretKey = "#dfgdsdg";

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("It's working");
});

//loign
app.post("/login",(req,res)=>{
    const user = users.find((user) => user.username === req.body.username);
    if(user){
          if(req.body.password === user.password){
            const token = jwt.sign({userId:user.id},secretKey,{
                expiresIn:60
            });
            return res.json({token});
          }else{
            return res.json({msg:"Wrong password"});
          }
    }else{
        return res.json({msg:"User Not found"});
    }
})

function checkToken(req,res,next){
    const token = req.headers["authorization"];//req.headers.authorization
    if(token){
       jwt.verify(token,secretKey,(err,decoded)=>{
        if(err){
            console.log(err);
            return res.json({msg:"Token is invalid"});
        }else{
           
           req.userId = decoded.userId //   req.userId not default created id
          // console.log(req.userId);
           next()
        }
    }) 
    }else{
        return res.json({msg:"Token is missing"});
    }
}
//sending data to headers
app.get("/data",checkToken,(req,res)=>{
   // console.log(req);
    const filtered = cars.filter((car)=>car.userId === req.userId);
    
    res.json({cars:filtered}) 
})
app.listen(4000,()=>{
    console.log("Running")
})