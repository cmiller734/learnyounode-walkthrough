var http = require('http');
var concat = require('concat-stream');

var myURL = process.argv[2]; //data stream 1
var body = undefined;
var concatStream = undefined;
var numConcat = 0;

function readURLAndParse(callback) {
    return http.get(myURL,function (response){
        concatStream = concat(callback);
        //response.setEncoding("utf8");
        response.on("error", function(e){
            body = e;
        });
        response.pipe(concatStream);
    });
}

function readData(data) {
    console.log(data.toString());
}

readURLAndParse(readData);
