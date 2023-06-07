const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:Number,
    contact_no:String,
    experience:{
        type:String,
        default:true
    },
    students:[],

},
{timestamps:true});

const Mentor = mongoose.model("mentors",MentorSchema);

module.exports = Mentor;