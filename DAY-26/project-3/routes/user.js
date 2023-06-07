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
    const token = jwt.sign({id:result._id},"secretkey");
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"sivabs123@gmail.com",
            pass: "wnbllfawtkzonekw"
        }
    });
    let info = await transporter.sendMail({
        from:"Mini Team<sivabs123@gmail.com>",
        to:req.body.email,
        subject:"Verify your Email - Mini Team",
        html: `
        <div>
        <strong>${req.body.name}</strong>,we welcome to our platform.
       <a style="background:yellowcolor:white" href="http://localhost:4000/user/verify/${token}">Verify Email
        </a>
        <p>Thanks and Regards</p>
        <p> From Mini team</p>
        </div>`
      
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
                if(!user.verified){
                    return res.json({msg:"Verify your account first"})
                }
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
});
//verify
router.get("/verify/:token",async (req,res)=>{
   try {
    const token = req.params.token;
    jwt.verify(token,"secretkey",async (err,decoded)=>{
        if(err){
            return res.json({msg:"Invalid Url"})
        }else{
           const user = await User.findByIdAndUpdate(decoded.id,{
            verified:true,
           });
           return res.json({msg:"Account Verified"})
        } 
    })
   } catch (error) {
    return res.json({msg:error.message}) 
   }
})
module.exports = router;