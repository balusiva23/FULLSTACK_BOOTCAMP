const router = require("express").Router();

const {Mentor,User} = require("../models");

router.get("/",(req,res)=>{
    res.send("User Router is working")
});

router.post("/add",async(req,res)=>{
    try {
        const mentorData = await Mentor.findById(req.body.mentorId);
        const studentData = {
            name:req.body.name,
            age:req.body.age,
            contact_no:req.body.contact_no,
            department:req.body.department,
            mentor:mentorData,
        }
        const user = await User.create(studentData);
        await Mentor.findByIdAndUpdate(req.body.mentorId,{$push:{students:user}});
        res.json(user);
    } catch (error) {
        return res.json({msg:error.message})
    }
})

module.exports = router;
