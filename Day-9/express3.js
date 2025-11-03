const express = require('express');
const app = express();
const port = 3000;

// Home route — show form
app.get('/', (req, res) => {
  res.send(`
    <h1>Student Marks Percentage Calculator</h1>
    <form action="/result" method="get">
      <input type="text" name="username" placeholder="Enter your name" required /><br><br>
      <input type="number" name="marksObtained" placeholder="Marks Obtained" required /><br><br>
      <input type="number" name="totalMarks" placeholder="Total Marks" required /><br><br>
      <button type="submit">Calculate Percentage</button>
    </form>
  `);
});

// Result route — show message and percentage
app.get('/result', (req, res) => {
  const name = req.query.username;
  const obtained = Number(req.query.marksObtained);
  const total = Number(req.query.totalMarks);

  // Calculate percentage
  let percentage = ((obtained / total) * 100).toFixed(2);

  res.send(`
    <h1>Hello, ${name}!</h1>
    <p>
      You scored <strong>${obtained}</strong> out of <strong>${total}</strong>.<br>
      Your percentage is <strong>${percentage}%</strong>.
    </p>
    <a href="/">🔙 Go Back</a>
  `);
});

// Start server
app.listen(port, () => {
  console.log(` Server running....🚀`);
});