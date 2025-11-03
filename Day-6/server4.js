const http = require('http')

const server = http.createServer((req,res)=>
{
    res.writeHead(200, {'content-tye': 'application/json'})
    const data = {
        name :"Navjot",
        course: "CSE"
    }
    res.end(JSON.stringify(data))
})

server.listen(3000, ()=>{
    console.log("server start");
})