const fs = require('fs');
const zlib = require('zlib');

const  readStream = fs.createReadStream('read.txt');
const writeStream = fs.createWriteStream('read.txt.gz');

const gzip = zlib.createGzip();  // Transorm stream
readStream.pipe(gzip).pipe(writeStream); // Read->compress->write
console.log("file is compressed");

