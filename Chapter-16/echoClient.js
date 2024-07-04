let net = require("net");
const socket = net.createConnection({port:9000}, ()=>{console.log('connected');});
socket.write('hello');
    socket.on('data', (data)=>{console.log(data.toString());//data ==> received from client
    socket.end();
});
socket.on('end', ()=>{
    console.log('disconnected from server');
});
