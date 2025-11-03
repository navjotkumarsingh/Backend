const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>
{
    const escapeHtml = (str) =>
      String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

    if(req.url=='/'){
        const filePath = path.join(__dirname, 'hiii.txt')
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type" : "text/html"})
                res.end('<h1>Server Error: could not read hiii.txt</h1>')
                return
            }
            res.writeHead(200,{"content-type" : "text/html"})
            res.end(`<h1>This is home page</h1><pre>${escapeHtml(data)}</pre>`)
        })
    }
    else if(req.url== '/about'){
        const filePath = path.join(__dirname, 'hey.txt')
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type" : "text/html"})
                res.end('<h1>Server Error: could not read hey.txt</h1>')
                return
            }
            res.writeHead(200,{"content-type" : "text/html"})
            res.end(`<h1>This is about page</h1><pre>${escapeHtml(data)}</pre>`)
        })
    }
    else if(req.url== '/contact'){
        res.writeHead(200,{"content-type" : "text/html"})
        res.end('<h1>This is contact page</h1>')
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"})
        res.end('<h1>404 Page not found</h1>')
    }
})

server.listen(3000, ()=>{
    console.log("Server is running");
})