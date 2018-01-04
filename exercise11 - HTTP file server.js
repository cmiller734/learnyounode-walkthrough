var http = require('http');
var fs = require('fs');

var portNo = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req,res) {
    res.writeHead(200, { 'content-type':'text/plain'})

    var readStream =  fs.createReadStream(file);

    readStream.on('open', function() {
        readStream.pipe(res);
    })

    readStream.on('error', function(err) {
        res.end(err);
    })
})
server.listen(portNo);
