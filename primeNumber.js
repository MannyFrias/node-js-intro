// ## Exercise 11: Prime Number Checker

// Create a program that checks if a number provided as a command line argument is prime.

const args = process.argv[2];
const num = parseInt(args);
function isPrime(n) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++)
    if (n % i == 0) {
      return false;
    }
  return true;
}

// switch (num) {
//   case num <= 1:
//     return false;
//   case num <= 3:
//     return true;
//   case num % 2 === 0:
//     return false;
//   case num % 3 === 0:
//     return false;
// }
