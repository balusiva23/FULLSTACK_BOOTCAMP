const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/blog-db?retryWrites=true&w=majority")

const Post = mongoose.model("posts",{
    title:String,
    content:String,
});

app.get("/",async(req,res)=>{
    const posts = await Post.find();
    res.render("home",{
        posts,
    })
})
//single post
app.get("/posts/:postId",async(req,res)=>{
    const postId = req.params.postId;
    const post = await Post.findById(postId) ;
    res.render("post",{
        title:post.title,
        content:post.content,
        postId:post._id
    })
})
//delete
app.get("/delete/:postId",async(req,res)=>{
    const postId = req.params.postId;
   // const post = await Post.findById(postId) ;
   try {
    await Post.findByIdAndDelete(postId) ;
    res.redirect("/");
   } catch (error) {
    console.log(error)
   }
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/contact",(req,res)=>{
    res.render("contect");
});
app.get("/compose",(req,res)=>{
    res.render("compose");
})
//add compose to db
app.post("/compose",async(req,res)=>{
    const {postTitle,postBody} = req.body;
    const post = new Post({
        title:postTitle,
        content:postBody,
    });
    try {
        await post.save();
        res.redirect("/");
    } catch (error) {
        res.redirect("/");
        console.log(error)  
    }
})

//

app.listen(4000,()=>{
    console.log("Server Running");
})