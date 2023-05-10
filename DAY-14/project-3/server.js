 
const http = require('http');
const fs = require('fs');
 const url = require('url');

 const server = http.createServer((req,res)=>{
    let q = url.parse(req.url,true);
    let filename = "."+q.pathname+".html";
    fs.readFile(filename,(err,data)=>{
    if(err){
       // console.log(err);
       res.write("<h1>404 page not found</h1>");
       return res.end();
    }
    res.write(data);
    res.end()
    });
 })

 server.listen(4001, ()=>{
    console.log("Server is up and running"); 
 })