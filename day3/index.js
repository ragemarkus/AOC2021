const { count } = require("console");
const fs = require("fs");
const { stringify } = require("querystring");

const data = fs.readFileSync("./day3/input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return data;
  }
});

const df = data.split('\n')

var binary = df.map(function (item) {
  return item;
});

console.log(binary)

function separateArr(maxArr, pos) {

map = {
  0: [],
  1: []
}

  for (let index = 0; index < maxArr.length; index++) {
    const element = maxArr[index];
    if(element[pos] == 0){
      map[0].push(element)
    }else{
      map[1].push(element)
    }
  }
  return map
}

let oxygen = '';
let co2 = '';

// need to feed in the next position in the binary value
let postMap = separateArr(binary,0)

for (let index = 1; index < 12; index++) {
  console.log('postMap[0].length', postMap[0].length)
  console.log('postMap[1].length', postMap[1].length)
  max =  postMap[0].length > postMap[1].length ? 0 : 1
  console.log('max', max)
  postMap = postMap[max]

  if(postMap.length == 1){
    console.log(postMap)
    oxygen = parseInt(postMap[0],2)
    break
  }

  postMap = separateArr(postMap,index)
  
}

postMap = separateArr(binary,0)

for (let index = 1; index < 12; index++) {
  console.log('postMap[0].length', postMap[0].length)
  console.log('postMap[1].length', postMap[1].length)
  min = postMap[0].length < postMap[1].length || postMap[0].length == postMap[1].length ? 0 : 1
  console.log('min', min)
  postMap = postMap[min]

  if(postMap.length == 1){
    console.log(postMap)
    co2 = parseInt(postMap[0],2) 
    break
  }

  postMap = separateArr(postMap,index)
  
}



console.log(oxygen * co2)