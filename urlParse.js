// ## Exercise 15: URL Parser

// Write a program that takes a URL as a command line argument and prints its different components (protocol, hostname, path, etc.)
const args = process.argv[2];
const url = new URL(args);

console.log(url.pathname);
console.log(url.protocol);
console.log(url.hostname);
