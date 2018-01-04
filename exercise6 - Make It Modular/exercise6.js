var mymodule = require('./mymodule.js');

var dirName = process.argv[2];
var extWithoutPeriod = process.argv[3];

mymodule(dirName, extWithoutPeriod, function(err, data) {
  if (err) {console.log(err);}

  for (var i = 0; i < data.length; i++)
  {
  console.log(data[i]);
  }

});
