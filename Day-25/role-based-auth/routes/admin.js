const router = require("express").Router();
const User = require("../models/User");
const bcrpty = require("bcrypt")
const express = require('express');
const app = express();
router.get("/",(req,res)=>{
    res.send("Admin Route is Working");
})


// router.post("/signup",async(req,res)=>{
//     const salt = await bcrpty.genSalt(10); //optional salt generation
//     const hash = await bcrpty.hash(req.body.password,salt);
//     req.body.password = hash;
//     req.body.loginType = 1;
//     req.body.role = "admin";
//     const user =  new User(req.body);
//     await user.save();
//     res.json({msg:"Account Created Successfully"});
// })



module.exports = router;