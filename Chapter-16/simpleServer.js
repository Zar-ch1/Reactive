const http = require('http');
const url = require('url');
const path = require('path');
const { escape } = require('querystring');
const port = 9000;
let rootDirectory = __dirname;//current running dir
let server = new http.Server();
let fs = require('fs');

let extToTypeMapping = {
    '.html': 'text/html',
    '.hml': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.txt': 'text/plain'
};

console.log('root directory', rootDirectory);

server.on('request', (request, response) => {
    let endpoint = url.parse(request.url).pathname;
    if (endpoint == '/') {
        response.write('<h1>hello world</h1>');
        response.end();
    }
    else {
        try {
            let filename = endpoint.substring(1);
            console.log('filename===>', filename);
            filename = filename.replace(/\.\.\//g, '');
            filename = path.resolve(rootDirectory, filename);
            console.log('filename2==>', filename);
            let type = extToTypeMapping[path.extname(filename)] || "application/octet-stream";
            console.log('type ', type);
            let stream = fs.createReadStream(filename);
            stream.once('readable', () => {
                response.setHeader("Content-Type", type);//content type can show 'how to display which content type'
                response.writeHead(200);
                stream.pipe(response);
            });
            stream.once('error', (error) => {
                response.setHeader("Content-Type",
                    "text/plain; charset=UTF-8");
                response.writeHead(404);
                response.end(error.message);
            });
        } catch (error) {
            response.setHeader("Content-Type",
                "text/plain; charset=UTF-8");
            response.writeHead(404);
            response.end(error.message);
        }


    }
    console.log('end point', endpoint);


    /*;
    switch (path.extname(filename)) {
        case ".html":
        case ".htm": type = "text/html"; break;
        case ".js": type = "text/javascript"; break;
        case ".css": type = "text/css"; break;
        case ".png": type = "image/png"; break;
        case ".txt": type = "text/plain"; break;
        default: type = "application/octet-stream";
            break;
    }*/

});
server.listen(port);

