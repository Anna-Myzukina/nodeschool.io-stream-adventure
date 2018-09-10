//Exercise 13
/**
 * In this example, you will be given a readable stream, `counter`, as the first
argument to your exported function:

    module.exports = function (counter) {
        // return a duplex stream to count countries on the writable side
        // and pass through `counter` on the readable side
    };

Return a duplex stream with the `counter` as the readable side. You will be
written objects with a 2-character `country` field as input, such as these:

    {"short":"OH","name":"Ohio","country":"US"}
    {"name":"West Lothian","country":"GB","region":"Scotland"}
    {"short":"NSW","name":"New South Wales","country":"AU"}

Create an object to track the number of occurrences of each unique country code.
`npm install duplexer2` in the directory where your solution file is located.
 
*/

var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
  var counts = {};
  var input = through(write, end);
  return duplexer({ objectMode: true }, input, counter);

  function write(row, _, next) {
    counts[row.country] = (counts[row.country] || 0) + 1;
    next();
  }
  function end(done) {
    counter.setCounts(counts);
    done();
  }
};