const fs = require('fs');
/* when you import the modules 
   you alway need 'requrire' keyword
*/
fs.writeFile('./demotext.txt', 'that is write api', (err, data)=>{
    if(!err)
        {
            console.log('reading file ==> ', data);
        }
    
});
console.log('Done');