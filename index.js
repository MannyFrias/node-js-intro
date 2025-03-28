const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const port = 3000;

app.get("/ping", (req, res) => {
  // console.log("req =", req);
  return res.send("pong");
});

app.listen(port, () => {
  console.log("Hello World");
});

//exercise2 commandline args
// const args = process.argv.slice(2);
// console.log("args =", args);

// exercise3 simple calc
// const args = process.argv.slice(2);
// const [num1, operator, num2] = args;

// const a = parseFloat(num1);
// const b = parseFloat(num2);

// let result;

// switch (operator) {
//   case "+":
//     result = a + b;
//     break;
//   case "-":
//     result = a - b;
//     break;
//   case "*":
//     result = a * b;
//     break;
//   case "/":
//     result = b !== 0 ? a / b : "Error: dividing by 0";
//     break;
//   default:
//     console.error("Invalid operator. use (+,-,*,/)");
//     // terminate switch case as unsuccessful
//     process.exit(1);
// }

// console.log(`Result: ${result}`);

// exercise4 number guess
// const args = process.argv.slice(1);
// const [input] = args;

// const computerChoice = [Math.floor(Math.random() * 100)];

// if (input === computerChoice) {
//   console.log("You Win!");
//   console.log("computerChoice =", computerChoice);
//   console.log("input =", input);
// } else {
//   console.log("You Lose!");
//   console.log("computerChoice =", computerChoice);
//   console.log("input =", input);
// }

// exercise5 palindrome check
// const args = process.argv.slice(2);
// const [input] = args;
// console.log("input =", input);
// const revInput = [...input].reverse().join("");
// console.log("revInput=", revInput);
// const answer =
//   JSON.stringify(input) === JSON.stringify(revInput)
//     ? "Palindrome"
//     : "Not a Palindrome";
// console.log(answer);

// exercise6 file reader
const filePath = process.argv[2];
if (!filePath) {
  console.log("invalid filepath as argument");
  process.exit(1);
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error has occured", err);
    process.exit(1);
  }
  console.log(data);
});
