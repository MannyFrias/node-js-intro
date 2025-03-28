// ## Exercise 18: Array Sorter

// Create a program that sorts an array of numbers or strings ['apple', 'tom', 'dob'] provided as command line arguments.
// Lets assume if it's either a string or numbers
/*

*/
const args = process.argv[2];

// ['apple', 'tom', 'dob']
if (isNaN(args)) {
  console.log(args);
  const sorted = args.sort();

  console.log(sorted);
}

// ['9,2,3,4'] => ['9', '2', '3', '4'] => [9, 2, 3, 4] => [2, 3, 4, 9]

function isNumeric(args) {
  const splitStr = args.split(",");
  // console.log("splitStr=", splitStr);
  const toInt = splitStr.map((num) => {
    return parseInt(num);
  });
  toInt.sort((a, b) => a - b);
  console.log("toInt=", toInt);
}
isNumeric(args);
