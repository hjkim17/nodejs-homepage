var http = require('http')

var server = http.createServer(helloWorld);

function helloWorld (req, res) {
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.end('Hello World');
}

server.listen(process.argv[2]);