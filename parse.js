var fs = require('fs')
var csv = require('csv');

// read csv file
fs.readFile('recurly.csv', 'utf8', function (err, csvdata) {
  if (err) {
    return console.log(err);
  }
  // parse read data into arrays
  csv.parse(csvdata, function(err, parseddata) {

  	// put array data into csv string
  	csv.stringify(parseddata, function(err, output) {

  		// write csv array to file
			fs.writeFile('output.csv', output, function (err) {
			  if (err) throw err;
			  console.log('It\'s saved!');
			});
  	});
  });
});

