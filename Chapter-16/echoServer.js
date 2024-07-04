const net = require('net');
let server = net.createServer();
server.listen(9000, ()=>console.log('ServerStarted'));
server.on('connection', (socket)=>{
    console.log('new connection ');
    socket.on('data', (data)=>{
        console.log('Data received ', data.toString());
    })
    socket.write('hello ' + new Date());
    socket.end();
})