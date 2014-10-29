#!/usr/bin/env node --harmony

"use strict";

const
  fs = require('fs'),
  spawn = require('child_process').spawn,
  filename = process.argv[2];

if (!filename) {
  throw Error("Please specify a file with the list of ssh targets!");
}

var
   fileContent = '',
   array = [];

fs.readFile(filename, function (err, fileContent) {
  if (err) { throw err; };
  array = fileContent.toString().replace(/\r\n|\r|\n/g, "").replace(/\s+/g, " ").split(" ");
  return array;

});

  var count=array.length;
  while (count>0) {
    count--;
    console.log(array[count]);
    let ssh = spawn('ssh', ['devops@' + array[count] + ' w']);
    ssh.stdout.pipe(process.stdout);
  };

console.log();

/**
fs.watch(filename, function() {
  let ls = spawn('ls', ['-lh', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");
**/
