const router = require("express").Router();

const {Mentor,User} = require("../models");

router.get("/",(req,res)=>{
    res.send("User Router is working")
});

router.post("/add",async(req,res)=>{
    try {
    
        const userData = await User.create(req.body);
        const mentorData = await Mentor.findByIdAndUpdate(req.body.mentor,
            {
                $push:{students:userData._id},
              
            },  {new:true}
            );
        res.json({user:userData,mentor:mentorData});
    } catch (error) {
        return res.json({msg:error.message})
    }
})

router.get("/all",async(req,res)=>{
  const users = await User.find().populate('mentor',"name age email contact_no"); //populate return coressponding data instead off id
  res.json(users) 
})

module.exports = router;
