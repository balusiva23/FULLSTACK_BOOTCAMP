const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

mongoose.connect("mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/to-do-list-db?retryWrites=true&w=majority")

//const items = [];

const Item = mongoose.model("items",{
    name:String,
});
app.get("/",async(req,res)=>{
    const items = await Item.find();
res.render("first",{
   items
});
})

app.post("/",async(req,res)=>{
    const item = req.body.newitem;
    try {
        const data = new Item({name:item});
        await data.save();
        res.redirect("/")
    } catch (error) {
        res.redirect("/") 
    }
   // items.push(item);
 
})

app.listen(port,()=>{
    console.log("Server Running");
})