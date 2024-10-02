
"use strict" // It can check whole code strictly


// Chapter 1 : variable scoping

//     VAR

// var is global scope variable but it can't be access outside the function .
// var does not have to be declared. 
// var is hoisted. 
// var binds to this.
var x = 10;
// Here x is 10

//     LET

// let and const must be declared before use. 
// let and const are not hoisted. 
// let and const does not bind to this. 
// let is blocked scope variable
{
  let x = 2;
  // Here x is 2
}

//     CONST 

// const is also a blocked scope variable.
// Always declare a variable with const when you know that the value should not be changed.
// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp
{
  const x = 2;
  // Here x is 2
}

//In Const this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// You can change the properties of a constant object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// But you can NOT reassign the object:
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// Here x is 10

var a = 2;    let b = 1;    const c = 1;
a = 3;        b = 2;      
var a = 4;


//var can be reassigned , redecleared and show updated value 
// let  can only be reassigned and show updated value
// const  can not be reassigned and redecleared

carName = "Volvo";
var carName;

// Variables defined with var are hoisted to the top and can be initialized at any time.
//  Meaning: You can use the variable before it is declared:

carName = "Saab";
let carName = "Volvo";

// Variables defined with let are also hoisted to the top of the block, but not initialized.
// Meaning: Using a let variable before it is declared will result in a ReferenceError:


//ES6 allows function parameters to have default values.

function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  myFunction(5); // will return 15

//  The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);


// Chapter 3
  
//   Destructuring assignment makes it easy to assign array values and object properties to variables.

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Destructuring Assignment
  let { firstName, age } = person;

//   When destructuring an object, you must use the same name for the variables as the corresponding object keys (names). The order of the keys (names) does not matter.

// Destructuring assignment makes it easy to assign array values and object properties to variables.

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;