//Exercise 5
/**
 * convert even-numbered lines to upper-case and odd-numbered
lines to lower-case

1.npm install split through2
 */
var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount++;
    next();
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);