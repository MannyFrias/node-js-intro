// ## Exercise 9: CSV Parser

// Create a program that reads a CSV file and prints each row as a JavaScript object.

const fs = require("fs");
const args = process.argv.slice(2);
const CSV = args[0];

fs.readFile(CSV, "utf-8", (err, data) => {
  if (err) {
    console.err(err);
    process.exit(1);
  }

  const lines = data.trim().split("\n");
  const lineArr = lines.map((line) => line.split(","));
  const arr1 = lineArr[0];
  const arr2 = lineArr[1];
  for (let i = 0; i < lineArr.length; i++) {
    const obj = { [arr1[i]]: arr2[i] };
    console.log(obj);
  }
});
