const fs = require('fs');
console.log('Start');
fs.readFile('helloWorld.txt', 'utf-8', (err, data)=>{
    if(!err)
        {
            console.log('DATA', data.toString());
        }
});
console.log('Done');