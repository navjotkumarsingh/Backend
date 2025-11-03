// Reading content and display it on the server
const { log } = require('console');
const fs = require('fs');
const http = require('http');

// creation of the server
http.createServer((req,res)=>{
    fs.readFile('output.txt','utf-8',(err,data)=>{
        if(err){res.end("err")}
        else{res.end(data)}
    });
}).listen(3000,()=>{
    console.log("Open browser");
})
