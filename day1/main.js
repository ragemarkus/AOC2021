const fs = require("fs");

fs.readFile("./day1/input", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let prev = 188
  let cnt = 0

  let df = data.split("\n");
    df.forEach(depth => {
        console.log('current depth:', depth, 'previous depth:', prev)
        if(parseInt(depth) > parseInt(prev)){
            cnt += 1
            console.log('going deeper', depth, 'is deeper than', prev, 'count of increases', cnt )
        }

        prev = depth
    });
    console.log(cnt)
});
