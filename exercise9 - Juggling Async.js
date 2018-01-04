var http = require('http');
var concat = require('concat-stream');

var urls = [];
var responses = [];
var count = 0;
var numURLsGiven = 0;
for (var i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]); //push the URLs into the urls array
    numURLsGiven++; //calculate number of URLs youre processing
}

function processURLs(index){
    http.get(urls[index], function(response) {
        response.pipe(concat(function(data) {
            responses[index] = data.toString();
            count++;

            if (count == numURLsGiven) {
                logResults();
            }
        }));
    });
}

function logResults() {
    for (var j = 0; j < numURLsGiven; j++)
    {
        console.log(responses[j]);
    }
}

for (var k = 0; k < numURLsGiven; k++)
{
    processURLs(k);
}