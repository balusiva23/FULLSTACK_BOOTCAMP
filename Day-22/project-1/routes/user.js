const router = require("express").Router();

const {User} = require("../models");

router.get("/",(req,res)=>{
    res.send("User Route is working");
})

router.post("/add",async(req,res)=>{
    try {
        const user = new User(req.body);
        const data = await user.save();
        res.json(data)
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.put("/update/:id",async(req,res)=>{
    try {
        
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(data)
    } catch (error) {
        res.json({msg:error.message});
    }
});


module.exports = router;