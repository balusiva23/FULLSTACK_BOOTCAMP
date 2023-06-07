const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    contact_no:String
},{
    timestamps:true
});

const User = mongoose.model("users",UserSchema);

module.exports = User;