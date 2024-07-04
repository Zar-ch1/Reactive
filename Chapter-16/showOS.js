const os = require('os');
const path = require('path');
console.log('home', os.homedir());
console.log('host name ', os.hostname());
console.log('type ', os.type());

console.log('sep', path.sep);
let p = 'hi/hello/bego/hello.txt';
console.log('base ', path.basename(p));
console.log('ext ', path.extname(p));
console.log('dir ', path.dirname(p));
console.log('normallized ', path.normalize('a/b/c/../d/'));