const router = require("express").Router();

const {Mentor} = require("../models");

router.get("/",(req,res)=>{
    res.send("Mentor Route is working");
})

router.post("/add",async(req,res)=>{
    try {
       const mentor = new Mentor(req.body);
       const data = await mentor.save();
       return res.json(data); 
    } catch (error) {
        res.json({msg:error.message});
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const user = await Mentor.findByIdAndDelete(req.params.id);
        if(user){
            return res.json({msg:"Deleted Successfully"})
        }
        return res.json({msg:"No user found"});
    } catch (error) {
        res.json({msg:error.message});
    }
})
module.exports = router;