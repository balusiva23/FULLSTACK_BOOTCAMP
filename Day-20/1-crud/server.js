const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/crud-db?retryWrites=true&w=majority")
//CRUd
const User = mongoose.model('users',{
    name:String,
    age:Number,
    email:String,
});
//Create
app.post("/add",async(req,res)=>{
    const user = new User(req.body);
    try {
        const response = await user.save();
        res.json(response);
    } catch (error) {
        res.send("Data not stored");
    }
})
//read
app.get("/",async(req,res)=>{
    const users = await User.find();
    res.json(users);
})

//update
app.put("/update",async(req,res)=>{
  const user = await User.findByIdAndUpdate(req.body.id,{
    name:req.body.name,
    age:req.body.age,
  },{new:true});
  res.json(user);
})
//delete
app.delete("/delete/:id",async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
})
app.listen(4000,()=>{
    console.log("Running");
})