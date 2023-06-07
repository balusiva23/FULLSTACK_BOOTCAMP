const router = require("express").Router();

const User = require("../models/User");
const bcrpty = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

router.get("/",(req,res)=>{
    res.send("User route is working");

});

router.post('/signup',async(req,res)=>{
    const salt = await bcrpty.genSalt(10);
    const password = await bcrpty.hash(req.body.password,salt);
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:password
    })
    const result = await user.save();
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"sivabs123@gmail.com",
            pass: "wnbllfawtkzonekw"
        }
    });
    let info = await transporter.sendMail({
        from:"sivabs123@gmail.com",
        to:req.body.email,
        subject:"Welcome to our platform",
        html:`
        <div>
        <strong>${req.body.name}</strong>,we welcome to our platform.
       
        <div style="background:grey">
        <img width"300" height="130" src="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png"></div>
          </div>
        <p>Thanks and Regards</p>
        <p> From Mini team</p>
        </div>
        `
      
    })
    if(info){
        console.log(info);
    }
   res.json(result);
});

router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(user){
            const result = await bcrpty.compare(req.body.password,user.password);
            if(result){
                const token =  jwt.sign({id:user._id},"secretkey");
                return res.json(token);
            }else{
                return res.json({msg:"Wrong password"});
            }
        }else{
            return res.json({msg:"User Not found"});
        }
    } catch (error) {
       return res.json({msg:error.message}) 
    }
})
const verifyToken = (req,res,next)=>{
    const token = req.headers["authorization"]
    if(token){
        jwt.verify(token,"secretkey",(err,decoded)=>{
            if(err){
                return res.json({msg:"Access Denied"})
            }else{
                req.userId = decoded.id;
                next();
            }
    })
    }
}
router.get("/data",verifyToken,async(req,res)=>{
try {
    const userId = req.userId;
    const user = await User.findById({_id:userId});
    res.json(user)
} catch (error) {
    return res.json({msg:error.message}) 
}
})
module.exports = router;