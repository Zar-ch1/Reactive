const fs = require('fs').promises;
/* when you import the modules 
   you alway need 'requrire' keyword
*/
fs.readFile('./hello.txt', 'utf8')
  .then(data=>console.log('data==> ', data.toString()));
console.log('Done');

async function readDemo()
{
    const data = await fs.readFile('./hello.txt', 'utf8');
    console.log('data ===>', data.toString());
}
readDemo();