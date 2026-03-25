// console.log("My name is Proscovia");

// // Variables
// // Declaring variables uses the var, let, or const keywords

// // var is function-scoped and can be redeclared and updated
// var name = "Proscovia";
// console.log(name);
// name = "Nakato Proscovia";
// console.log(name);

// // let is block-scoped and can be updated but not declared
// let age = 25;
// console.log(age);
// age = 18;
// console.log("My age has changed because I am just a girl", age);

// // const is block-scoped and cannot be updated or redeclared
// const height = 5.8;
// console.log(height);

// // Data Types
// // 1. String
// let greeting = "Hello, How are you";
// console.log(greeting);
// console.log(typeof greeting);

// // 2. Number
// let x = 10;
// let y = "12"
// console.log(x);
// console.log(y);
// console.log(typeof x);
// console.log(typeof y);


console.log('Nakato Proscovia');
console.log("You're doing great learning JavaScript!");
console.log(26);
// console.log(3.4259);
console.log(5+3);
console.log(10*2);

// Data types
// 1. A string: is any text, letters, words, sentences written as text. It usually goes inside quotes, either single or double.
let name = "Nakato"
let country = 'Uganda'
let sentence = "I am learning JavaScript"
console.log(name);
console.log(country);
console.log(sentence);

// 2. Numbers in JavaScript include whole numbers, decimals, negative numbers. No quotes needed.
let age = 25
let price = 9.99
let temperature = -3
console.log(age);
console.log(price);
console.log(temperature);


// 3. Boolean: Can only ever be one of two things, true or false. It is how JavaScript makes decisions.
let isLoggedIn = true
let hasBooking = false
console.log(isLoggedIn);
console.log(hasBooking);

// 4. Undefined: When you create a variable but do not give it a value, JavaScript automatically sets it to undefined which means it exists but has nothing in it yet.
let city
console.log(city);

// 5. Null: Null also means "no value" but the difference is you chose it on purpose. The difference between null and undefined is that, undefined happens by accident, null happens by decision. You set it to null intentionally.
let discount = null
console.log(discount);

// 6. An array is a list. It lets you store multiple values in one variable instead of creating a separate variable for each one. Values are separated by commas and wrapped in square brackets.
let destinations = ["Bwindi", "Jinja", "Murchison Falls"]
let numbers = [1, 2, 3, 4, 5]
console.log(destinations);
console.log(numbers);

//  7. Object: this groups related information together using key and value pairs. Instead of creating separate variables for someone's name, age and country, you put it all in one object.
let traveller = {
  name: "Nakato",
  age: 25,
  country: "Uganda"
}
console.log(traveller);
