var http = require('http');
var dt = require('./modulo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.dataehora());
  res.end();
}).listen(8080); 