const router = require("express").Router();

const {Mentor} = require("../models");

router.get("/",(req,res)=>{
    res.send("Mentor Router is working")
});

router.post("/add",async(req,res)=>{
    try {
        const user = new Mentor(req.body);

        const data = await user.save();
        return res.json(data);
    } catch (error) {
        return res.json({msg:error.message})
    }
})

router.get("/all",async(req,res)=>{
    const users = await Mentor.find().populate('students',"name age contact_no");
    res.json(users);
})
module.exports = router;
