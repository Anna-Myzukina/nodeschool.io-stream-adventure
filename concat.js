//Exercise 6
/**
 * Create a new file called concat.js.
You will be given text on process.stdin. Buffer the text and reverse it using
the `concat-stream` module before writing it to stdout.`concat-stream` is a write stream that you can pass a callback to get the
complete contents of a stream as a single buffer.In your adventure you'll only need to buffer input with `concat()` from
process.stdin.
`npm install concat-stream` in the directory where your solution
file is located.
 */
var concat = require('concat-stream');

process.stdin.pipe(concat(function (buffer) {
  process.stdout.write(buffer.toString().split('').reverse().join(''))
  process.stdout.write('\n')
}));