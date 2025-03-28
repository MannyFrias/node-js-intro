// ## Exercise 10: Directory Lister

// Write a program that lists all files in a directory provided as a command line argument.

const fs = require("fs");
const path = require("path");
const args = process.argv[2];

if (args.length === 0) {
  console.err("Please input proper directory");
}

const directoryPath = path.join(...args);
console.log(directoryPath);

try {
  const files = fs.readdirSync(directoryPath);
  console.log("Files:", files);
} catch (err) {
  console.error(err);
}

// fs.readdir(directoryPath, (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }
//   console.log("Files:", files);
// });
console.log("hi");
