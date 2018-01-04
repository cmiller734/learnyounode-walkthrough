var fs = require('fs');
var path = require('path');

module.exports = function ( dirName, ext, callback ) {

  var fileFilter = '.' + ext;
  var listOfFileNames = [];

  fs.readdir(dirName, function doneReading(err, list) {
    if (err) {return callback(err);}

    for (var i=0;i<list.length;i++)
    {
      if (path.extname(list[i]) == fileFilter)
      {
        listOfFileNames.push(list[i]);
      }
    }

  callback(null, listOfFileNames);

})

}

//module.exports = printFilteredFiles;
