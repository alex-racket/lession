#!/usr/bin/env node --harmony

const fs = require('fs');
fs.writeFile('target.txt', 'a message for target', function (err) {
  if (err) {
    throw err;
  }
  console.log("File saved!");
});
