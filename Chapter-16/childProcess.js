const child_process = require("child_process");
/*
   Synchronus

let listing = child_process.execSync("ls -l *.js",
    { encoding: "utf8" });
    console.log(listing);

*/

const { exec } = require('child_process');

exec('dir /s /b /o:gn', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});