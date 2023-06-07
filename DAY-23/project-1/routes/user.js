const router = require("express").Router();

const User = require("../models/User");

router.get("/",(req,res)=>{
    res.send("User Route is Working");
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

router.put("/add-sport/:userId",async(req,res)=>{
    try {
    //    const user = await User.findByIdAndUpdate(req.params.userId,{
    //    $push:{
    //     sports:req.body.name
    //    }
    //    },{new:true}
    //    ); 
    const user = await User.findByIdAndUpdate(req.params.userId,{
        $addToSet:{
         sports:req.body.name
        }
        },{new:true}
        );
       res.json(user)
    } catch (error) {
        console.log(error);
        res.json({msg: error.message})
    }
})

router.put("/remove-sport/:userId",async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.userId,{
            $pull:{sports:req.body.name},
        },{new:true});
        res.json(user)
    } catch (error) {
        
    }
})

module.exports = router;