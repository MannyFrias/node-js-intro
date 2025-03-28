// ## Exercise 13: Temperature Converter
// Write a program that converts temperatures between Celsius and Fahrenheit.
// The user should provide the temperature and the unit to convert from.

// [1, 2, 3, 4, 5] [2, 3, 4]
const args = process.argv.slice(2);
const temp = args[0];
const unit = args[1];

function farToCel(temp, unit) {
  if (unit == "f") {
    console.log((temp - 32) * (5 / 9));
  }

  if (unit == "c") {
    console.log((temp * 9) / 5 + 32);
  }
}
farToCel(temp, unit);

["c", "f"];
