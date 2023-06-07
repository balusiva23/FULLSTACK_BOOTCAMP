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
        sports:[
            new mongoose.Schema(
                {
                    name:String,
                    coach:String
                },{timestamps:true}
            )
        ]
    },{timestamps:true})


    const User = mongoose.model("users",UserSchema);

    module.exports = User;