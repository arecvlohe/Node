var fs = require('fs');
var data = '';

function readFile(file) {
  var readStream = fs.createReadStream('data.json');
  readStream.setEncoding('utf-8');
  readStream.on('data', function(chunk) {
    data+= chunk;
    file = data;
  });

  readStream.on('end', function() {
    console.log(data);
  });

  readStream.on('error', function(err){
   console.log(err.stack);
  });

  return file;
}


module.exports.readFile = readFile();
