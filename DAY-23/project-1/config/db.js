const mongoose = require("mongoose");

const url = 
"mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/user-db?retryWrites=true&w=majority";
mongoose.set("strictQuery",false);
const connectDB = async()=>{
    try {
        const con = await mongoose.connect(url);
        console.log(`MongoDB connected:${con.connection.host}`);
    } catch (error) {
       console.log(error); 
    }
}
module.exports = connectDB;