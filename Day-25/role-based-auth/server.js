const express = require('express');
const app = express();
require("dotenv").config();

const apiRouter = require('./routes');
const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use("/api",apiRouter);
app.get("/",(req,res)=>{
    res.send("It's working");
});

app.listen(4000,()=>{
    console.log("Running")
})