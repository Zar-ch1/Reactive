function factorial(n)
{
    console.log('N ',n);
    let result = 1;
    for(let i=1;i<=n;i++)
    {
        result *= i;
    }
    return result;
}
for(let i=0;i< 40000;i++)/*will run first becoz of js file priority*/
{
    //console.log('Something');
}
/*should run blocking code when call onMessage
  never run literally blocking code
*/
onmessage = (event)=>{
    console.log('Event in worker ',event.data);
    let result = factorial(event.data.data);
    console.log('Result ',result);
    postMessage({
        data : result
    });
};
console.log('Worker.js loaded...');