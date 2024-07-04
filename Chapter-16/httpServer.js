const net = require('net');//using tcp to produce htttp
let server = net.createServer();
server.listen(9000, () => console.log('HTTP ServerStarted'));
server.on('connection', (socket) => {
    console.log('new connection ');
    socket.on('data', (data) => {
        let request = data.toString();
        //console.log('Request', request);
        const lines = request.split('\r\n').at(0);
        const url = lines.split(' ')[1];
        console.log('Status Line', lines);
        console.log('URL', url);
        let body = '<html><h1>hello world</h1></html>';
        let response = 'HTTP/1.1 200 OK\r\n';
        response += '\r\n';//header complete
        response += body;
        socket.write(response);
        socket.end();
        
    });
 
});