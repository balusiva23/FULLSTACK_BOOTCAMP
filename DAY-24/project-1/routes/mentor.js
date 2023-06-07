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
module.exports = router;
