// ## Exercise 16: JSON Manipulator
// Create a program that reads a JSON file, modifies some values, and writes it back to a new file.
import fs from "fs";
const args = process.argv[2];
// path to ../testDir/test.json, read this file and then want JSON.parse()
// JSON.parse({"key": "value"})

fs.readFile("./testDir/test.json", (err, data) => {
  if (err) {
    console.log(err);
  }

  const file = JSON.parse(data);
  console.log(file);
});
