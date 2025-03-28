//
// Implement the classic FizzBuzz program: print numbers from 1 to n (provided as command line argument), but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".

const args = process.argv[2];
const n = parseInt(args);

for (let i = 1; i <= n; i++)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
