const router = require("express").Router();

const User = require("../models/User");
const {authenticate,permit} = require('../middlewares')

router.get("/",(req,res)=>{
    res.send("Syllabus Route is Working");
})

router.get("/all",[authenticate,permit([1,2,3])],async(req,res)=>{
    try {
        
        res.json({msg:"Got the syllabus"});
    } catch (error) {
        
    }
})

module.exports = router