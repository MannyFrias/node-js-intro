const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.get("/ping", (req, res) => {
  // console.log("req =", req);
  return res.send("pong");
});

app.listen(port, () => {
  console.log("Hello World");
});

//exercise2
// const args = process.argv.slice(2);
// console.log("args =", args);

// exercise3
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

// exercise4
const args = process.argv.slice(1);
const [input] = args;

const computerChoice = [Math.floor(Math.random() * 100)];

if (input === computerChoice) {
  console.log("You Win!");
  console.log("computerChoice =", computerChoice);
  console.log("input =", input);
} else {
  console.log("You Lose!");
  console.log("computerChoice =", computerChoice);
  console.log("input =", input);
}
