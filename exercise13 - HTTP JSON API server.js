var http = require('http');
var url = require('url');
var portNo = process.argv[2];
var server = http.createServer(function(req,res) {
    if (req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        parsedReq = url.parse(req.url, true);
        var date = new Date(parsedReq.query.iso);
        var json = '';
        if (parsedReq.pathname == '/api/parsetime')
        {
            json = JSON.stringify({
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            });
            return res.end(json);
        }
        else if (parsedReq.pathname == '/api/unixtime')
        {
            json = JSON.stringify({
                "unixtime": date.getTime()
            }) ;
            return res.end(json);
        }
        else
        {
            return res.end("oh dear, this won't do at all...");
        }
    }
    else {
        return res.end('Please send only GET data');
    }
});
server.listen(portNo);
