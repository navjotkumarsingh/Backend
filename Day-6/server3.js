const http = require('http');

function getData(res) {
    res.write('<h1>Welcome to my Server</h1>');
    res.write('<h2>Welcome to Wakanda</h2>');
    
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200,'utf-8', { 'Content-Type': 'text/html' });
        const data = getData(res);
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});