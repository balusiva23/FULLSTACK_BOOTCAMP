const express = require("express");
const app = express();
const mongoose = require('mongoose');

//middle ware

app.use(express.json());

mongoose.connect('mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/first-db?retryWrites=true&w=majority');

const Cat = mongoose.model('Cat', { name: String ,age:Number});
const Dog = mongoose.model('dogs', { name: String ,age:Number,owner:String});

app.get("/",(req,res)=>{
  res.send("Api is working")  
})

app.post("/create-cat",(req,res)=>{
    const kitty = new Cat(req.body);
    kitty.save().then(() => {
        res.send("Data Created at DB");
    });
    
})
// app.get("/create",(req,res)=>{
//     const kitty = new Cat({ name: 'Zildjian' });
//     kitty.save().then(() => console.log('meow'));
//     res.send("Data Created");
// })

app.post("/create-dog",async(req,res)=>{
    const dober = new Dog(req.body);
    try {
        await dober.save();
        res.send("Data for dog has been created ")
    } catch (error) {
        res.send(error);
    }
})

app.listen(4000,()=>{
console.log("Server is Running");
})