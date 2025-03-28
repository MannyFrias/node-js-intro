// ## Exercise 17: Email Validator

// Write a program that validates whether a string provided as a command line argument is a valid email address

const args = process.argv[2];
const atSymbol = "@";
const dotCom = ".com";

("asdasdasd@gmail.com");

// == non-strict === strict
// 2 == "2" //true | 2 === "2" //false

/*
1. does it contain an @ symbol -
2. does it end with a . something -
3. are there characters before the @ actually letters or mixed letters and numbers-
*/
// asdf#asdfasd
// christian@gmail.com
// room number - email that you book the room with
function beforeAt() {
  const indexOfAt = args.indexOf("@");

  if (indexOfAt > 0) {
    if (args.includes(atSymbol)) {
      if (args.includes(dotCom)) {
        console.log("valid email");
      }
    }
  } else {
    console.log("invalid email");
  }
}

beforeAt();
