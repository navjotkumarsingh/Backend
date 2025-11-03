// Import the built-in HTTP module
const http = require("http");

// Define a port number
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a response
  res.end("Hello, this is my Node.js server!");
});

// Start the server
server.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});