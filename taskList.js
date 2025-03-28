// ## Exercise 19: Simple Task List
// Write a program that allows users to add, view, and complete tasks in a simple task list stored in a text file.
// Takes in a command add view or complete
import fs from "fs";
import { text } from "stream/consumers";
const args = process.argv.slice(2);
const command = args[0];
const todo = args[1];

function view() {
  const file = fs.readFile("./testDir/test.txt", "utf-8", (err, data) => {
    if (err) console.log(err);

    console.log(data);
  });
}

const add = () => {
  fs.appendFile("./testDir/test.txt", "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const complete = () => {
  let combinedData = "";
  fs.readFile("./testDir/test.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }

    const splitData = data.split("\r\n");
    const todoList = splitData.filter((todo) => todo !== args[1]);
    console.log(todoList);
    for (let i = 0; i < todoList.length; i++) {
      combinedData = todoList[i];
    }
  });

  console.log("combinedData=", combinedData);
};
complete();

// im losing it slowly :/
