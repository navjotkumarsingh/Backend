const fs = require('fs');
const zlib = require('zlib');

// Reading the compresed file
const readStream = fs.createReadStream('read.txt.gz');

// Create a write stream for compressed file.
const writeStream =fs.createWriteStream('read_decompress.txt');

// Create gunzip for transformation
const gunzip = zlib.createGunzip();
// pipe -> read -> decompress -> write
readStream.pipe(gunzip).pipe(writeStream);

console.log("File is decompressed");