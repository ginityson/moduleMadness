var http = require('http');

var three = require('./modules/three');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write('' + three.textAccount() + three.comboDollar());

  res.end();
}).listen(3000);

console.log('listening on port 3000');
