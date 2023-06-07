const router = require("express").Router();

const User = require("../models/User");
const bcrpty = require("bcrypt")
const jwt = require("jsonwebtoken"); 
const {authenticate,permit} = require('../middlewares')
router.get("/",(req,res)=>{
    res.send("User Route is Working");
})
//signup
router.post("/signup",[authenticate,permit([1])],async(req,res)=>{
    try {
        const salt = await bcrpty.genSalt(10); //optional salt generation
            const hash = await bcrpty.hash(req.body.password,salt);
            req.body.password = hash;
            req.body.loginType = 2;
            req.body.role = "professor";
            const user =  new User(req.body);
            await user.save();
            res.json({msg:"Account Created Successfully"});
    } catch (error) {
        res.json({msg:error.message});
    }
})
//login
router.post("/login",async(req,res)=>{
  try {
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return res.json({msg:"User not found"});
  }else{
    const match = await bcrpty.compare(req.body.password,user.password);
    if(match){
         const token = await jwt.sign({usetId:user._id,loginType:user.loginType},
           process.env.SECRET_KEY 
             );
             return res.json({token});
    }else{
        return res.json({msg:"Wrong password"});
    }

  }
  } catch (error) {
    res.json({msg:error.message});
  }
});

router.get("/getstudents",[authenticate,permit([1,2])],async(req,res)=>{
    try {
        const user = await User.find({loginType:3}).select("name email");
        res.json(user);
    } catch (error) {
        
    }
})


module.exports = router;