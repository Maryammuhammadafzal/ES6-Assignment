
// Iterators 

// Iterators are iterable objects (like Arrays).

// Iteratorscan be accessed with simple and efficient code.

// Iterators can be iterated over with for..of loops


///// For Of Loop /////

// The JavaScript for..of statement loops through the elements of an iterable object.

// for (variable of iterable) {
//     // code block to be executed
//   }

// Iterating is easy to understand.
// It simply means looping over a sequence of elements.
// Here are some easy examples:

// Iterating over a String
// Iterating over an Array

// 1. Iterating Over a String

// You can use a for..of loop to iterate over the elements of a string:

let name = "Maryam";

for (let x of name) {
  console.log(name);
  
}

//2. Iterating Over an Array
// You can use a for..of loop to iterate over the elements of an Array:

// Example 1
const letters = ["a","b","c"];

for (const letter of letters) {
  console.log(letter);
  
}

// Example 2
const numbers = [2,4,6,8];

for (const number of numbers) {
  console.log(number);
  
}

//3. Iterating Over a Set
// You can use a for..of loop to iterate over the elements of a Set:

const alphabets = new Set(["a","b","c"]);

for (const alphabet of alphabets) {
  console.log(alphabet);
  
}

// Iterating Over a Map
// You can use a for..of loop to iterate over the elements of a Map:

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const friut of fruits) {
  console.log(friut);
  
}


/////// JavaScript Iterators //////////

// The iterator protocol defines how to produce a sequence of values from an object.
// An object becomes an iterator when it implements a next() method.
// The next() method must return an object with two properties:

// value (the next value)
// done (true or false)

// Note
// Technically, iterables must implement the Symbol.iterator method.
// String, Array, TypedArray, Map and Set are all iterables, because their prototype objects have a Symbol.iterator method.

////// Home Made Iterable///////
// This iterable returns never ending: 10,20,30,40,.... Everytime next() is called:

// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }

  // Create Iterable
  const n = myNumbers();
  n.next(); // Returns 10
  n.next(); // Returns 20
  n.next(); // Returns 30

  

//   The problem with a home made iterable:
//   It does not support the JavaScript for..of statement.
//   A JavaScript iterable is an object that has a Symbol.iterator.
//   The Symbol.iterator is a function that returns a next() function.
//   An iterable can be iterated over with the code: for (const x of iterable) { }

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

// Now you can use for..of

for (const num of myNumbers) {
  console.log(num);
  
}

// The Symbol.iterator method is called automatically by for..of.
// But we can also do it "manually":

let iterator = myNumbers[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
}

function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Create Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30



//   The problem with a home made iterable:
//   It does not support the JavaScript for..of statement.
//   A JavaScript iterable is an object that has a Symbol.iterator.
//   The Symbol.iterator is a function that returns a next() function.
//   An iterable can be iterated over with the code: for (const x of iterable) { }

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
let n = 0;
done = false;
return {
  next() {
    n += 10;
    if (n == 100) {done = true}
    return {value:n, done:done};
  }
};
}

// Now you can use for..of

for (const num of myNumbers) {
console.log(num);

}

// The Symbol.iterator method is called automatically by for..of.
// But we can also do it "manually":

let iterator = myNumbers[Symbol.iterator]();

while (true) {
const result = iterator.next();
if (result.done) break;
// Any Code Here
}
