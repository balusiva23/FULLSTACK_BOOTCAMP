const express = require('express');
const app = express();
const connectDB = require("./config/db");
const UserRouter = require("./routes/user")
connectDB();

app.use(express.json());
app.use("/user",UserRouter);
app.get("/",(req,res)=>{
    res.send("It's working");
});

app.listen(4000,()=>{
    console.log("Running")
})