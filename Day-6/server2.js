const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"content-type" : "text/plain"})
    res.end("Hello Server")
})

// Start the server
server.listen(3000, () => {
    console.log("server running");
})