
// Closure Presentation

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, 
// at function creation time.


function makeName() {
    var name = "Maryam"; // name is a local variable created by showName
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  makeName();

//init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is 
//defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local 
//variables of its own. However, since inner functions have access to the variables of outer scopes, displayName() can access the variable 
// name declared in the parent function, init(). Notice that the console.log() statement within the displayName() function successfully displays the value of the name variable, which is declared in its parent function. This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

function makeFunc() {
    const name = "Afzal";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();

//   Running this code has exactly the same effect as the previous example of the init() function above. What's different (and interesting) is that the displayName() inner function is returned from the outer function before being executed.

// At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables within a function exist for just the duration of that function's execution. Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. However, because the code still works as expected, this is obviously not the case in JavaScript.

// The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12

//   In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

// In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

// add5 and add10 both form closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.


// practical closure

// Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

// Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

// Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event).

// For instance, suppose we want to add buttons to a page to adjust the text size. One way of doing this is to specify the font-size of the body element (in pixels), and then set the size of the other elements on the page (such as headers) using the relative em unit:

// CSS code
// body {
//     font-family: Helvetica, Arial, sans-serif;
//     font-size: 12px;
//   }
  
//   h1 {
//     font-size: 1.5em;
//   }
  
//   h2 {
//     font-size: 1.2em;
//   }

// Such interactive text size buttons can change the font-size property of the body element, and the adjustments are picked up by other elements on the page thanks to the relative units.

// Here's the JavaScript:

// function makeSizer(size) {
//     return function () {
//       document.body.style.fontSize = `${size}px`;
//     };
//   }
  
//   const size12 = makeSizer(12);
//   const size14 = makeSizer(14);
//   const size16 = makeSizer(16);

// //   size12, size14, and size16 are now functions that resize the body text to 12, 14, and 16 pixels, respectively. You can attach them to buttons as demonstrated in the following code example.

// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

// `<button id="size-12">12</button>
// <button id="size-14">14</button>
// <button id="size-16">16</button>`




// Lexical scope /environment

let a = 20;
function outerFunction(){
    function innerFunction(){
        function innerMostFunction(){
            console.log(a);

        }
        innerMostFunction()
    }
    innerFunction()
}

outerFunction()

function outerFunction(number2){
    let number1 = 10
   function innerFunction(){
       let number3 = 90
       console.log(number1+number2+number3);

    }
    return innerFunction
}

let returningFunction = outerFunction(20)
console.log(returningFunction());
