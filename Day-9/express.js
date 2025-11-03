const express = require('express');
const app = express();
const port = 3000;

// Home page — shows arithmetic form
app.get('/', (req, res) => {
  res.send(`
    <h1>🧮 Simple Arithmetic Calculator</h1>
    <form action="/calculate" method="get">
      <input type="number" name="num1" placeholder="First Number" required />
      <input type="number" name="num2" placeholder="Second Number" required />
      <select name="operation" required>
        <option value="add">Addition (+)</option>
        <option value="sub">Subtraction (-)</option>
        <option value="mul">Multiplication (×)</option>
        <option value="div">Division (÷)</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  `);
});

// Handle calculation
app.get('/calculate', (req, res) => {
  const n1 = Number(req.query.num1);
  const n2 = Number(req.query.num2);
  const op = req.query.operation;
  let result;

  switch (op) {
    case 'add':
      result = n1 + n2;
      break;
    case 'sub':
      result = n1 - n2;
      break;
    case 'mul':
      result = n1 * n2;
      break;
    case 'div':
      result = n2 !== 0 ? n1 / n2 : 'Error (Division by Zero)';
      break;
    default:
      result = 'Invalid operation';
  }

  res.send(`
    <h2>Calculation Result</h2>
    <p>${n1} ${getSymbol(op)} ${n2} = <strong>${result}</strong></p>
    <a href="/">🔙 Go Back</a>
  `);
});

// Helper function for symbols
function getSymbol(op) {
  switch (op) {
    case 'add': return '+';
    case 'sub': return '-';
    case 'mul': return '×';
    case 'div': return '÷';
    default: return '?';
  }
}

app.listen(port, () => {
  console.log(`Server running....🚀`);
});