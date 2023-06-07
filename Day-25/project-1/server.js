const express = require("express");
const app = express();
const bcrpty = require("bcrypt")
app.use(express.json());


app.get("/",(req,res)=>{
  res.send("It's working");
});

app.post("/signup",async(req,res)=>{
    const salt = await bcrpty.genSalt(10); //optional salt generation
    const hash = await bcrpty.hash(req.body.password,salt);
    res.json({hash});
})
app.post("/login",async(req,res)=>{
    const result = await bcrpty.compare(req.body.password,req.body.hash);
    if(result){
        return res.json({msg:"Logged In"});
    }else{
        return res.json({msg:"Wrong Password"});
    }
})
app.listen(4000,()=>{
  console.log("Running")
})