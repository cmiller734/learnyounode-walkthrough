var http = require('http');
//var myURL = 'http://www.npmjs.com/package/concat-stream';
var myURL = process.argv[2]; //first command line argument passed
var body = '';

function readURLAndParse(callback) {
    return http.get(myURL,function (response){
        response.setEncoding("utf8");

        response.on("error", function(e){
            body = e;

        });

        response.on("data", function(d){
            body += d + '\n';
        });

        response.on('end', function()
        {
        //data business logic
        callback();
        });

    });
}

function readData() {
    console.log(body);
}

readURLAndParse(readData);
