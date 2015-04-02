var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello Dibakar, your 1st Node Server Runs Successfully");
	response.end();
}).listen(8888);