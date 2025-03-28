const fs = require("fs");
const filePath = process.argv[2];

if (!filePath) {
  console.log("invalid filepath as argument");
  process.exit(1);
}

fs.readFile("test.txt", (err, data) => {
  if (err) {
    console.error("Error has occured", err);
    process.exit(1);
  }
  console.log(data);
});
