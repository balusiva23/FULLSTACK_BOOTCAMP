const express = require('express');
const app = express();
const UserRouter = require('./routes/user');
const connectDB = require("./config/db");
connectDB();
app.use(express.json());
app.use("/user",UserRouter);

app.get("/",(req,res)=>{
    res.send("APi is working");

});
app.listen(4000,()=>{
    console.log("Server is Running")
})