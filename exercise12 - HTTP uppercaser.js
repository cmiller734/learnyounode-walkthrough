var http = require('http');
var map = require('through2-map');

var portNo = process.argv[2];
var server = http.createServer( function(req, res) {
    if (req.method == 'POST') {
        req.pipe(map(function (chunk) {
            //business logic
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
    else {
        return res.end("Please send only POST data\n");
    }
})
server.listen(portNo);