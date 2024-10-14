
// //Array Method Presentation

// // concat() Returns a new array comprised of this array joined with other array(s) and/or value(s)
// // every() Returns true if every element in this array satisfies the provided testing function
// // filter() Creates a new array with all of the elements of this array for which the provided filtering function returns true
// // forEach() Calls a function for each element in the array
// // indexOf() Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found
// // join() Joins all elements of an array into a string
// // lastIndexOf() Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found
// // map() Creates a new array with the results of calling a provided function on every element in this array
// // pop() Removes the last element from an array and returns that element
// // push() Adds one or more elements to the end of an array and returns the new length of the array
// // reduce() Applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value
// // reduceRight() Applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value
// // reverse() Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first
// // shift() Removes the first element from an array and returns that element
// // slice() Extracts a section of an array and returns a new array
// // some() Returns true if at least one element in this array satisfies the provided testing function
// // toSource() Represents the source code of an object
// // sort() Sorts the elements of an array
// // splice() Adds and/or removes elements from an array
// // toString() Returns a string representing the array and its elements
// // unshift() Adds one or more elements to the front of an array and returns the new length of the array
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var length = fruits.push("Kiwi");

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.join(" * ");

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruit = fruits[2];

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var size = fruits.length;

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruit = fruits.pop();

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruit = fruits.shift();

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi";

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";

// // Warning !
// // Using delete() leaves undefined holes in the array.

// // Use pop() or shift() instead.

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];

// // The concat() method does not change the existing arrays. It always returns a new array.

// // The concat() method can take any number of array arguments.

// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];

// var myChildren = myGirls.concat(myBoys);

// // The copyWithin() method overwrites the existing values.
// // The copyWithin() method does not add items to the array.
// // The copyWithin() method does not change the length of the array.

// // Copy to index 2, all elements from index 0:
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);

// // Copy to index 2, the elements from index 0 to 2:
// var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2);

// var myArr = [[1,2],[3,4],[5,6]];
// var newArr = myArr.flat();

// var myArr = [1, 2, 3, 4, 5, 6];
// var newArr = myArr.flatMap(x => [x, x * 10]);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// var months = ["Jan", "Feb", "Mar", "Apr"];
// var spliced = months.toSpliced(0, 1);

// // Note
// // The slice() method creates a new array.
// // The slice() method does not remove any elements from the source array.
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1);

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);

// // All JavaScript objects have a toString() method.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();



// Array methods

// forEach,map,filer,reduce,sort

const numbers = [1,2,3,4];

// Array methods
// For Each
numbers.forEach((value,index)=>{
    console.log(value,index);

})


let arr = [1.999 , 2.89 , 3.8 , 4.4 , 5.0];

// Array. map
// Map return a new array by performing some operation on array element 
let a = arr.map((value) =>{
    return value + 1 
})
// console.log(a , arr);

let mapArray = arr.map(Math.floor);
// console.log(mapArray);

// map

// const numbers = [1, 2, 3, 4];

// let result = numbers.map(function (value, index) {
//   if (value % 2 === 0) {
//     return value;
//   }

//   return "no value"
// });

// console.log(result);
// Array. Filter
// it give a new filterd value from array

let b = arr.filter((value)=>{
   return value < 3;
})

let filterArray = arr.filter();
console.log(filterArray);

// console.log(b, arr);

// Array .reduce 
// it returns ony value not array after perform any operation

let c = arr.reduce((num1 , num2)=>{
    return num1 + num2;
})

// console.log(c);

