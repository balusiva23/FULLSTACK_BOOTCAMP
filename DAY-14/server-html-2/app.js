const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
fs.readFile("index.html",(err,data)=>{
    if(err){
        console.log(err);
    }
    res.write(data);
    res.end();
})
})
server.listen(4000,()=>{
    console.log("server is up and running");
});