const fs = require("fs");
const args = process.argv.slice(2);

fs.readFile("test.txt", (err, data) => {
  if (err) console.log(err);

  console.log(data.toString().length);
});
