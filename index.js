http = require("http");

port = process.argv[2] || process.env.PORT || "8080";

server = http.createServer(function (req, res) { res.write("hello world"); res.end(); });

server.listen(port);


