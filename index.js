console.log("My name is Proscovia");

// Variables
// Declaring variables uses the var, let, or const keywords

// var is function-scoped and can be redeclared and updated
var name = "Proscovia";
console.log(name);
name = "Nakato Proscovia";
console.log(name);

// let is block-scoped and can be updated but not declared
let age = 25;
console.log(age);
age = 18;
console.log("My age has changed because I am just a girl", age);

// const is block-scoped and cannot be updated or redeclared
const height = 5.8;
console.log(height);

// Data Types
// 1. String
let greeting = "Hello, How are you";
console.log(greeting);
console.log(typeof greeting);

// 2. Number
let x = 10;
let y = "12"
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);