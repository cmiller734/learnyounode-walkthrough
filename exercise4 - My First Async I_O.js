var fs = require('fs');

var fileToRead = process.argv[2];
var numberOfLines = undefined;

function countLineBreaks(callback) {
  fs.readFile(fileToRead, utf8, function doneReading(err, data) {
    if (err) {
      return console.log(err);
    }
    numLineBreaks = data.split('
').length - 1;
    callback();
  });
}

function logLineBreaks() {
  console.log(numLineBreaks);
}

countLineBreaks(logLineBreaks);