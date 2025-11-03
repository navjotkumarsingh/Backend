const express = require('express');
const app = express();
const port = 3000;

// Home route — form to enter name
app.get('/', (req, res) => {
  res.send(`
    <h1>👋 Welcome Page</h1>
    <form action="/welcome" method="get">
      <input type="text" name="username" placeholder="Enter your name" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Welcome route — displays message with name
app.get('/welcome', (req, res) => {
  const name = req.query.username;
  res.send(`
    <h1>🎉 Welcome, ${name}!</h1>
    <p>Glad to have you here 😊</p>
    <a href="/">🔙 Go Back</a>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});