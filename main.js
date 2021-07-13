//var fs = require("fs");
//var html = fs.readFileSync("robot.html", "utf8");
//console.log(html);

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});