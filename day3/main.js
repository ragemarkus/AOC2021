const { count } = require("console");
const fs = require("fs");
const { stringify } = require("querystring");

const data = fs.readFileSync("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return data;
  }
});

var map = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0
}

const df = data.split('\n')

df.forEach(item => {
    for (let index = 0; index < item.length; index++) {
        const element = parseInt(item[index]);
        map[index] += parseInt(element)
        console.log('element', element,'map[index]:', map[index], 'map',map, )
    }
    console.count()
    console.log('map:', map)
});

// let map2 = {
//   '0': 522,
//   '1': 530,
//   '2': 493,
//   '3': 505,
//   '4': 521,
//   '5': 488,
//   '6': 508,
//   '7': 504,
//   '8': 504,
//   '9': 504,
//   '10': 494,
//   '11': 490
// }

let maplength = (Object.keys(map).length)
let valGamma = ''
let valEpsilon = ''

for (let index = 0; index < maplength; index++) {
  const element = map[index];

  if (element > df.length/2) {
    valGamma += '1'
    valEpsilon += '0'
  }else{
    valGamma += '0'
    valEpsilon += '1'
  }
}

var gammaRate = parseInt(valGamma, 2);
var epsilonRate = parseInt(valEpsilon, 2);
console.log(gammaRate)
console.log(epsilonRate)

console.log(gammaRate * epsilonRate)