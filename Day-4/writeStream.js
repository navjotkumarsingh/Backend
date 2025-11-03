const fs = require('fs');
const write = fs.createWriteStream("read.txt");

write.write("I'm aspiring software engineer");

write.end();