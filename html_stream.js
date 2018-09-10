//Exercise 10
/**
 * Your program will get some html written to stdin. Convert all the inner html to
upper-case for elements with a class name of "loud",
and pipe all the html to stdout.

You can use `trumpet` and `through2` to solve this adventure.
 */
var trumpet = require('trumpet');
var through = require('through2');
var stream = through(write, end);
var tr = trumpet();
var loud = tr.select('.loud').createStream();
loud.pipe(stream).pipe(loud);

function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(tr).pipe(process.stdout);