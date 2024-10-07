// "use strict"

// Chapter 3
// Template literals

let MyfirstName = "Maryam"
let MylastName = "Afzal"

console.log("My name is " + MyfirstName +" "+
    MylastName
);

console.log(`My name is ${MyfirstName} ${MylastName}`);

// Revision of Chapter 2
// Destructuring

const arr = ["red","blue","green","pink","orange"];


let arr1 = arr[0]
let arr2 = arr[1]

let [,,value2,,value3] = arr


console.log(value2,value3);


const constantArray = [["one","two"],"three"];



let [[num1,num2],var2] = constantArray;

console.log(num2);

// Revision of Chapter 2
// Destructuring in objects

const car = {
    name: "corolla",
    model: [2024,2022],
    wheels: {
        number: 4,
        color: "black"
    },
    engine: true
}

let carName = car.name;
let carModel = car.model

let { engine: carEngine, model:[,model2022], wheels:{color,number} } = car
console.log(model2022);

// Chapter 4
// Default parameters

function abc(a=9,b=2){

    return a+b
}

var sum = abc(6)

console.log(sum);


const users=[
    {firstName:"Tayyaba",rollNO:90309,age:23},
    {firstName:"Maryam",rollNO:8794,age:20},
    {firstName:"Mehak",rollNO:23846,age:20}
]

let [{rollNO:zipcode},{firstName},{age}] = users

console.log(zipcode,age,firstName);

//Chapter 5
// Ternary operator


let userAge = 5;
let drink;

var userNumber;

drink = age > 5 ? "coffeee" : age == 5 ? "water" : "milk";

console.log(drink);

if(userAge>=5){
    drink="coffee"
}
else if(userAge == 5){
drink="water"
}
else{
    drink="milk"
}


//Chapter 6
// Rest parameter


function numbers(...numbers) {
    let result = 0;

    for (let num of numbers) {
        result = result + num
    }
    return result
    console.log(num1);
    console.log(num2);

}
console.log(
    numbers(1, 2, 3));


// Important Notes    

// primitive vs reference or non-primitive data type
// string
// numbers
// boolean
// undefined
// BigInt
// null
// symbol
// NaN

// Reference
// array
// objects 
// functions

// Important Point

console.log(typeof function(){});
 // type of function is function

 //primitive Data type Behaviour

let int1 = 7;
let int2 = int1
console.log("printing before increment");
console.log(int1);
console.log(int2);

num1++
// num = num+1

console.log("printing after increment");
console.log(num1);
console.log(num2);

// Refrence or Non primitive Data type Behaviour

let array1 = [7,6,8]
let array2 = array1

console.log("printing before pushing");
console.log(array1);
console.log(array2);

array1.push(9)

console.log("printing after pushing");
console.log(array1);
console.log(array2);

// It's behaviour is immutable it store new variable in new stack not update in 1st variable
let string = "class"
let upperCased = string.toUpperCase()
console.log(string)

console.log(upperCased);

// Chapter 7
// spread operator

// This all methods for changing the behaviour of non primitive data type example array
let one = [8,7,2];
let two = [9,7,0];
let copyone = one.slice(0);
let concateone = [].concat(one);
let spreadone = [...one,...two,9];

console.log(one);
console.log(copyone);
console.log(concateone);
console.log(spreadone);


console.log(two);
console.log(one == two);//false

// Chapter 8
// Higher order functions

function abc(get){

function outer(){
    console.log("return");
    
}
return outer

}

function function2(){
  return "function2"
    
}
let functionReturned = abc(function2)
functionReturned();
