#!/usr/bin/env node --harmony

"use strict";

const
  user = "devops",
  command = 'w',
  fs = require('fs'),
  spawn = require('child_process').spawn,
  filename = process.argv[2];

if (!filename) {
  throw Error("Please specify a file with the list of ssh targets!");
}

var
   fileContent = '',
   host ='',
   array = [];

fs.readFile(filename, function (err, fileContent) {
  if (err) { throw err; };
  array = fileContent.toString().replace(/\r\n|\r|\n/g, "").replace(/\s+/g, " ").split(" ");
});

var count=array.length;
  console.log(array);
while (count>0) {
    count--;
    console.log(array[count]);
    spawnCmd(array[count]);
};


function spawnCmd(host) {
  let result = spawn('ssh', [user+'@'+host + ' ' + command]);
  console.log(result);
  result.stdout.pipe(process.stdout);
};

/**
fs.watch(filename, function() {
  let ls = spawn('ls', ['-lh', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");
**/
