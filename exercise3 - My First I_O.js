var fs = require('fs');

var fileToRead = process.argv[2];

var bufferedFile = fs.readFileSync(fileToRead);

var bufferedFileString = bufferedFile.toString();

var fileLinesArray = bufferedFileString.split('\n');

var numberOfLines = fileLinesArray.length - 1; //subtract 1 because the file being
                                              //read doesn't have a newline at end
console.log(numberOfLines);
