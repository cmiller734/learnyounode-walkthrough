var fs = require('fs');
var path = require('path');

var listOfFileNames = "";
var folder = process.argv[2];

function printFileList(callback) {
fs.readdir(folder, function doneReading(err, list) {
  if (err) {console.log(err);}

  for (var i=0;i<list.length;i++)
  {
    var fileNameString = list[i] + '\n';
    if (path.extname(list[i]) == '.md')
    {
      listOfFileNames += fileNameString;
    }
  }

  callback();
});
}

function logFileList() {
    console.log(listOfFileNames);
}

printFileList(logFileList);
