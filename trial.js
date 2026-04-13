// Grabbing Elements
let heading = document.getElementById("title");
let paragraph = document.getElementById("intro");
let button = document.getElementById("btn");

// Changing text
let mainheading = document.getElementById("title");
heading.textContent = "Hello Tech Buddie!";

// Changing styles
let firstParagraph = document.getElementById("intro");
firstParagraph.style.color = "Blue";
firstParagraph.style.fontSize = "24px";

// Events (clicks)
// addEventListener listens to something to happen.
// "click" means when the user clicks, run this function

let btn = document.getElementById("btn");
let count = 0;

btn.addEventListener("click", () => {
    count++;
    display.textContent = count;
});

// Arrow functions
// Arrow functions are more concise way to write functions in js
// they are often used for short, simple functions

// Traditional fuction expression
const traditionalFunction = function() {
    console.log("This is a traditional function");
}
traditionalFunction();

function anotherTraditionalFunction() {
    console.log("This is another traditional function");
}
anotherTraditionalFunction();

// Arrow function expression
const arrowFunc = () => {
    console.log("This is an arrow function");
}
arrowFunc();

const add = (a, b) => {
    console.log(a + b);
}
add(3,4)

// JSON - Javascript Object Notation 

// Javascript object
const task = {
    id: 1,
    title: "Complete Javascript assignment",
    completed: false
}
console.log(task);

// JSON string
const taskJSON = JSON.stringify(task);
console.log(taskJSON);

// Parsing Object string back to Javascript object
const parsedTask = JSON.parse(taskJSON);
console.log(parsedTask);