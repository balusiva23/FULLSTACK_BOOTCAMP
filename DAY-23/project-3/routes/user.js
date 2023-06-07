const router = require("express").Router();

const User = require("../models/User");

router.get("/",(req,res)=>{
    res.send("User Route is Working");
})
router.post("/add",async(req,res)=>{
    try {
        // const user = new User(req.body);
        // const data = await user.save();
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        res.json({msg:error.message});
    }
});
router.get("/get",async(req,res)=>{
    try {
        //const data = await User.find();
        //const data = await User.find({age: {$gt:18}});
       // const data = await User.find({age: {$gte:18}});
       // const data = await User.find({age: {$lt:18}});
       // const data = await User.find({age: {$lte:18}});
       const data = await User.find().sort({age:"asc"})
       //.select("-age -email");
       //.select("name email");
        res.json(data)
    } catch (error) {
        res.json({msg:error.message});
    }
})
module.exports = router;