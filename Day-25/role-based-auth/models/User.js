const mongoose = require("mongoose");


    const user =  new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            required:true,
        },
        loginType:{
            type:Number,
            required:true, //!. Admin, 2.Professer, 3.Student
        }
    },
    {timestamps:true});
   

     const User = mongoose.model("users",user)
   
    module.exports = User;