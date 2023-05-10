const http = require("http");

const server = http.createServer((request,response)=>{
    //console.log(request);
    if(request.url == "/hello"){
        response.write("<h1>This is Hello world</h1>");
        response.end();
        return;
    }
    response.write(`<div>
    <h1>Welcome to my server</h1>
    Hey MyFirst Server
    </div>`);
    response.end();
    
})
server.listen(4000,()=>{
    console.log("server is up and running");
});