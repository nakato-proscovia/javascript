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

// 8. Symbol: Mathematical operators
let a = 4;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// Conditions in JavaScript
//  if statement

let condition = true;
let condition1 = false;
let condition2 = false;

if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}

// else-if statement: used when conditions are more than two
if (condition1) {
    // code to be executed condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if condition1 and conditon2 are false
}

// Practice Examples
let mark = 50;

if (mark > 69) {
    console.log("Very good, you have passed the exam")
}

if (mark >= 70) {
    console.log("You have passed the exam")
} else {
    console.log("You have failed the exam")
}

// Comparison Operators
// 1. Equal to (==)
// 2. Not equal to (!=)
// 3. Strict equal to (===)
// 4. Strict not equal to (!==)
// 5. Greater than (>=)
// 6. Less than (<=)

// Arrays
let cars = ["Volvo", "Benz", "Kia", "Toyota"]
console.log(cars);
console.log(cars[2]);

// mixed array
let mixedArray = ["Vision", 25, "Uganda", true, null, undefined, {name: "Nakato"}];
console.log(mixedArray);
console.log(mixedArray[6])

// Object
{} // an empty object

let person = {
    name: "Proscovia",
    age: 25,
    district: "Uganda",
    isStudent: true,
    hobbies: ["travelling", "coding", "networking"],
    address: {
        street: "123 Johnson St",
        city: "Mbarara",
        country: "Uganda",

    }
}
console.log(person);
console.log(person["name"]);
console.log(person.hobbies);
console.log(person.hobbies[1]);


// Assignment A'level Grading System

let marks = 65;

if (marks >= 80) {
    console.log("Grade: A - Excellent")
} else if (marks >= 70) {
    console.log("Grade: B - Very Good")
} else if (marks >= 60) {
    console.log("Grade: C - Good")
} else if (marks >= 50) {
    console.log("Grade: D - Satisfactory")
    } else if (marks >= 40) {
        console.log("Grade: E - Pass")
    } else {
        console.log("Grade: O - Fail")
    }


function getGrade(score) {
    if(score >= 80) {
        return "A - Excellent";
    } else if (score >= 70) {
        return "B - Good";
    } else if (score >= 60) {
        return "C - Fair";
    } else if (score >= 50) {
        return "D - Pass";
    } else {
        return "F - Fail"
    }
}
console.log(getGrade(85));
console.log(getGrade(74));
console.log(getGrade(43));



// Assignment: An array called scores containing objects with each object having a name and score properties

let scores = [
    {name: "Patience", score: 85},
    {name: "Tasha", score: 65},
    {name: "Stephen", score: 45},
    {name: "Eunice", score: 85},
];

scores.forEach(student => {
    let grade;

    if (student.score >= 90) {
        grade = "A"
    } else if (student.score >= 80) {
        grade = "B"
    } else if (student.score >= 70) {
        grade = "C"
    } else if (student.score >= 60) {
        grade = "D"
    } else if (student.score >= 50) {
        grade = "E"
    } else {
        grade = "F"
    }

    console.log(student.name + ": " + student.score + " and my grade is " + grade)
})


// Functions
// Functions are reusable blocks of coed that perform a specific task. They can take parameters and return value.
// Function declaration: we ue the function keyword to declare a function

function functionName() {
    // code to be executed
}

function funcName(parameter) {
    // code to be executed 
    return parameter;
}

function funcWithParameters(parameter1, parameter2, parameter3) {
    // code to be executed
    return parameter1 + parameter2 + parameter3;
}

// Working expample of a function
function returnSomeValue() {
    return "This is my first working function in JavaScript"
}

returnSomeValue();
function returnParameter(parameter) {
    return parameter;
}

// console.log(returnParameter("Hello this is my second function in JavaScript"));
const result = returnParameter("Helo this is my function in JavaScript");
console.log(result);

function addNumbers(x, y) {
    return x + y;
}

const sum = addNumbers(4, 5);
console.log(sum);

// loops
// 1. for loop
// incrementing for loop
for (let i = 0; i < 7; i++) {
    console.log(i)
}

// Decrementing for loop
for (let i = 7; i > 0; i--) {
    console.log(i)
}

const myCars = ["volvo", "benz", "kia", "toyota"];
console.log(myCars);
const numberOfCars = myCars.length;
console.log(numberOfCars);
const kiaPosition = myCars.indexOf("kia");
console.log("The postion of kia in the array is ", kiaPosition);

for (let i = 0; i < myCars.length; i++) {
    console.log(myCars[i]);
}

for (let car of myCars) {
    function printCarPosition(car) {
        const index = myCars.indexOf(car);
        console.log("The position of " + car + " in the array is " + index);
    }
    printCarPosition(car);
    console.log(car);
}

// 2. while loop
// incrementing while loop
let id = 0;
while (id < 7) {
    console.log("from the while loop ", id);
    id++;
}

// decrementing while loop
let i = 9;
while (i > 0) {
    console.log("Decrementing while loop", i);
    i--;
}

// let password = "";

// while (password !== "1234") {
//     password = prompt("Please enter the password:");
// }

// // 3. Do-while loop
// let iw = 0;
// do {
//     console.log("From the do-while loop ", iw);
//     i++;
// } while (i < 7);