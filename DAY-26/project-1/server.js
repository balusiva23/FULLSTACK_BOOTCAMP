const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("APi is working");

});
app.get("/send",async(req,res)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"sivabs123@gmail.com",
            pass: "wnbllfawtkzonekw"
        }
    })
    let info = await transporter.sendMail({
        from:"sivabs123@gmail.com",
        to:"balusiva1299@gmail.com",
        subject:"Test Email Nodemailer",
        text:"From nodemailer.js nodemailer"
    })
 if(info){
    console.log(info);
 }
    res.send({msg:"Email sent."})
 
});

app.listen(4000,()=>{
    console.log("Server is Running")
})