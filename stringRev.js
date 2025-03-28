// ## Exercise 12: String Reverser

// Create a program that reverses a string provided as a command line argument.

const args = process.argv[2];
const input = [...args];
let word = "";
for (let i = input.length - 1; i >= 0; i--) {
  word += input[i];
}

console.log(word);
// const someArr = ["drow", "word"];
// 'word' => ['w', 'o', 'r', 'd']

// console.log(someArr.reverse());
// [word]
// [drow]
