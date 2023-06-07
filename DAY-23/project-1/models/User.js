const mongoose = require("mongoose");

    const UserSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        age:{
         type:Number,
         required:true,
        },
        contact_no:{
            type:Number,
            required:true
        },
        department:String,
        sports:[]
    },{timestamps:true})


    const User = mongoose.model("users",UserSchema);

    module.exports = User;