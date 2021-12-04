var fs = require('fs')
var text = fs.readFileSync('./day1/input', 'utf8');
var depthString = text.split('\n');
var depth = depthString.map(function(item) {
  return parseInt(item, 10);
});

let j = 0
let k = 0
let i = 0

for (i; i < depth.length; i++) {
  if (depth[i] < depth[i+1]) {
    j = j+1;
  } else {
  }
  
  if ((depth[i] + depth[i+1] + depth[i+2]) < (depth[i+1] + depth[i+2] + depth[i+3])) {
    k = k+1;
  }

} 
console.log("part 1: " + j);
console.log("part 2: " + k);