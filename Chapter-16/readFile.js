const fs = require('fs');
/* when you import the modules 
   you alway need 'requrire' keyword
*/
fs.readFile('./hello.txt', 'utf8', (err, data)=>{
    if(!err)
        {
            console.log('reading file ==> ', data.toString());
        }
    
});
console.log('Done');
console.log('hello');