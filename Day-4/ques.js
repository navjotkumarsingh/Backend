// Read and write inside a file in both sync and async ways
const fs = require('fs');

// Writing to a file synchronously
try {
  fs.writeFileSync('example.txt', 'Hello, this is written synchronously!');
  console.log('File written successfully (sync)');
} catch (err) {
  console.error('Error writing file (sync):', err);
}

// Reading from a file synchronously
try {
  const data = fs.readFileSync('example.txt', 'utf-8');
  console.log('File content (sync):', data);
} catch (err) {
  console.error('Error reading file (sync):', err);
}


// Writing to a file asynchronously
fs.writeFile('example_async.txt', 'Hello, this is written asynchronously!', (err) => {
  if (err) return console.error('Error writing file (async):', err);
  console.log('File written successfully (async)');

  // Reading the same file asynchronously
  fs.readFile('example_async.txt', 'utf-8', (err, data) => {
    if (err) return console.error('Error reading file (async):', err);
    console.log('File content (async):', data);
  });
});