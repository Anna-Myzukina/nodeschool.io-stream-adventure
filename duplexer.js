//Exercise 12
/**
 * Write a program that exports a function that spawns a process from a `cmd`
string and an `args` array and returns a single duplex stream joining together
the stdin and stdout of the spawned process:

    var spawn = require('child_process').spawn;

    module.exports = function (cmd, args) {
        // spawn the process and return a single stream
        // joining together the stdin and stdout here
    };
    
    `npm install duplexer2` in the directory where your solution file is located.
 */
var spawn = require('child_process').spawn;
var duplexer2 = require('duplexer2');

module.exports = function(cmd, args) {
  var spawnProcess = spawn(cmd, args);
  return duplexer2(spawnProcess.stdin, spawnProcess.stdout);
};