const mongoose = require("mongoose");


   
     const User = mongoose.model("students",{
        name:String,
        email:String,
        password:String
     })
   
    module.exports = User;