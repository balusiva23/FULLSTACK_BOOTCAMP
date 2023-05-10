const express = require("express");

const app = express();

app.use(express.json());

const users = [
    { user: "alice123", email: "alice@example.com", pass: "p@ssw0rd", age: 25 },
    { user: "bob456", email: "bob@example.com", pass: "secretpass", age: 30 },
    { user: "charlie789", email: "charlie@example.com", pass: "myPa$$w0rd", age: 35 }
  ];
  
  app.get("/",(req,res)=>{
   res.status(200).json(users);
  })

  app.post("/add",(req,res)=>{
    users.push(req.body);
    res.json({msg:"Data added"});
  })

  app.get("/:age",(req,res)=>{
    const age = req.params.age;
    const data = users.filter((users)=>users.age < age);
    //res.json(data);
    if(data.length > 0){
        return res.json(data);
    }
    res.status(404).json({data,msg:"No users found"});
  })

  app.listen(4000,()=>{
   console.log("Running")
  })