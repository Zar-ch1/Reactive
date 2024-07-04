const fs = require('fs');
let stats = fs.statSync('./demotext.txt');
console.log('isFile ', stats.isFile());
console.log('isDir ', stats.isDirectory());
console.log('size ', stats.size);
console.log('owner id ', stats.uid);
console.log('mode stats ', stats.mode.toString(8));