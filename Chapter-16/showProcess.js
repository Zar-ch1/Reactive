console.log('cwd', process.cwd());
console.log('cpu usage', process.cpuUsage());
console.log('env', process.env);
/*
for(let prop in process)
    {
        if(typeof process[prop] !== 'function')
            {
                console.log('prop', prop, 'value', process[prop]);
            }
    }
*/