const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Api is working");
});
app.listen(4000,()=>{
    console.log('Server is running')
});

// HTTP methosd
//GET -data teceive
//POST = data send
//PUT - update
//PATCH - data update(dtat certain part)
//DELETE - delete data
//post
app.post("/",(req,res)=>{
    res.send("Post route is working")
})
app.put("/",(req,res)=>{
    res.send("Put route is working")
})
app.patch("/",(req,res)=>{
    res.send("patch route is working")
})
app.delete("/",(req,res)=>{
    res.send("delete route is working")
})