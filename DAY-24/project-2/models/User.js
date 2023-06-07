const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    contact_no:String,
    department:String,
    mentor:{
        type:mongoose.Types.ObjectId,
        ref:"mentors",
    },
   
}, {timestamps:true});

const User = mongoose.model("users",UserSchema);
module.exports = User;