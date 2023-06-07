const mongoose = require("mongoose");


   
     const User = mongoose.model("students",{
        name:String,
        email:String,
        password:String,
        verified:{
         type:Boolean,
         default:false,
        }
     })
   
    module.exports = User;