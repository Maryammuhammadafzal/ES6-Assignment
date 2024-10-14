
//Arrow Function

// Arrow functions allows a short syntax for writing function expressions.

// You don't need the function keyword, the return keyword, and the curly brackets.
let product = (x , y) => x * y;

// Note Key Points

// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always a constant value.

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
let welcome = () => {return "welcome"}
console.log(welcome());


let showMessage = (message) => {return message}
console.log(showMessage("Good Morning"));


let greetUser = (msg , name) => {
    let message = msg + name;
    return message}
// greetUser();

console.log(greetUser(("greeting ") ,prompt("what is your name ?")));
