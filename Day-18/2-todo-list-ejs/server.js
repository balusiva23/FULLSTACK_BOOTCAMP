const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
const items = [];

app.get("/",(req,res)=>{
    console.log(items);
res.render("first",{
    items,//items:items == items
});
})

app.post("/",(req,res)=>{
    const item = req.body.newitem;
    items.push(item);
    res.redirect("/") //redirect
})

app.listen(port,()=>{
    console.log("Server Running");
})