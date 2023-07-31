// JS Revise



// 1. Hoisting - Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed.

// console.log(myVar); // Output: undefined
// var myVar = 10;
// console.log(myVar); // Output: 10

// console.log(myVar1); // ReferenceError: Cannot access 'myVar' before initialization
// let myVar1 = 10;
// console.log(myVar1); // Output: 10

// console.log(myVar2); // ReferenceError: Cannot access 'myVar' before initialization
// const myVar2 = 10;
// console.log(myVar2); // Output: 10







// 2.  Implicit Type Coercion in javascript.
// Implicit type coercion in JavaScript refers to the automatic conversion of one data type to another by the JavaScript engine during certain operations.

// String Concatenation:

var x = 3;
var y = "3";
console.log(x + y + typeof (x + y));







// 3. passed by value and passed by reference

// passed by value
let d = 10;

function modifyValue(value) {
  value = 20;
}

modifyValue(d);
console.log(d); // Output: 10 (unchanged)

// passed by reference
const obj = { value: 10 };

function modifyObject(objRef) {
  objRef.value = 20;
}

modifyObject(obj);
console.log(obj.value); // Output: 20 (modified)




//4. Immediately Invoked Function in JavaScript?

// A function that gets executed immediately after its declaration

(function () {
  console.log("Hii I am IIFE");
})();





// 5. This Keyword

// The “this” keyword refers to the object that the function is a property of.

//The value of the “this” keyword will always depend on the object that is invoking the function.

console.log(this); //  Output: [object Window] (in the browser)

const obje = {
  name: "Mohit",
  val: function () {
    console.log(this.name);
  },
};

obje.val();





// 6. currying in JavaScript.

// Currying is a functional programming technique in JavaScript that involves transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

// Regular function taking multiple arguments
function add(a, b, c) {
  return a + b + c;
}

// Curried version of the 'add' function
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Usage of curriedAdd function
console.log(curriedAdd(1)(2)(3)); // Output: 6





// 7. Scope and Scope Chain

//scope refers to the context in which variables are declared and can be accessed.

// Global Scope
const globalVar = 10;

function globalFunction() {
  console.log(globalVar); // Accessible inside the function
}

console.log(globalVar); // Accessible outside the function

// local scope

function localFunction() {
  const localVar = 20; // Local scope

  console.log(localVar); // Accessible inside the function
}

//   console.log(localVar); // Error: localVar is not defined (not accessible outside the function)

// The Scope Chain is a mechanism in JavaScript that allows inner functions to access variables and functions declared in their outer functions.

function outerFunction() {
  const outerVar = "Outer Variable";

  function innerFunction() {
    console.log(outerVar); // Accesses 'outerVar' from the outer scope
  }

  innerFunction();
}

outerFunction();






// 8.  Closures in JavaScript.

// A closure occurs when a function is defined within another function and retains access to the variables and scope of its outer (enclosing) function, even after the outer function has finished executing.

function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable); // The inner function can access outerVariable
  }

  return innerFunction; // Return the inner function itself (not the result of calling it)
}

const closureExample = outerFunction(); // 'innerFunction' is assigned to 'closureExample'

closureExample(); // This will log: 'I am from the outer function'







// 9. Prototype and Prototypal Inheritence

// When we create anything in js they can access to some hidden properties
// and methods these come via prototype

// Js engine attaches an object to your object

let arr = ["Mohit", "Rohit"];

let object = {
  name: "Mohit",
  city: "Jhansi",
  getIntro: function () {
    console.log(this.name + this.city);
  },
};

// Prototype Chaining

/*
arr.__proto__
[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

Array.prototype
[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

arr.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

arr.__proto__.__proto__.__proto__
null

*/

// Modifying prototype not advisable

let Object2 = {
  name: "Rohit",
};

Object2.__proto__ = object;

// This is protoypical inheritence where Object2 is inheriting
// properties and methods from proto which is pointing to Object






// 10. Callback

//callback is a function that is passed as an argument to another function

function divideByHalf(sum) {
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum) {
  console.log(sum * 2);
}

function operationOnSum(num1, num2, operation) {
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20






// 11. callback hell

// Callback hell, also known as the Pyramid of Doom, is a term used to describe a situation in asynchronous programming when there are multiple nested callbacks within each other.

function divideByHalf(sum) {
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum) {
  console.log(sum * 2);
}

function operationOnSum(num1, num2, operation) {
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, (result1) => {
  divideByHalf(result1);
  operationOnSum(5, 5, (result2) => {
    multiplyBy2(result2);
    operationOnSum(10, 10, (result3) => {
      divideByHalf(result3);
    });
  });
});





// 12. Promises in JS

// Promises are used to handle asynchronous operations more cleanly and avoid callback hell

/*
A Promise can be in one of three states:

Pending: The initial state, before the Promise is fulfilled or rejected.
Fulfilled: The Promise has successfully resolved, and the operation completed successfully. The result value is available.
Rejected: The Promise encountered an error or failure during its execution. The reason for the rejection (error) is available.
*/

// Syntax -> let promise=new Promise((resolve,reject)=>{})

// resolve and reject are two callbacks provided by javascript itself

// resolve (value) , reject(error)

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("Promise p1 resolved");
    resolve(true);
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("Promise p2 rejected");
    reject(new Error("I am an error"));
  }, 3000);
});

p1.then((value) => {
  console.log(value);
});

p2.catch((error) => {
  console.log("some error occured");
});





// 13. memoization?

//Memoization is an optimization technique used in computer programming to speed up the execution of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again.




// 14.  use of a constructor function in javascript?
//Constructor functions are used to create objects in javascript.

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);





// 15. DOM

//DOM stands for Document Object Model. In JavaScript, the DOM is a programming interface that represents the structure of an HTML or XML document as a tree-like data structure.



// 16. BOM?
// BOM stands for Browser Object Model. It allows users to interact with the browser.  It is a JavaScript API that provides access to various features and functionalities of web browsers.




// 17. distinction between client-side and server-side JavaScript?

/*
Client-Side JavaScript:
Client-side JavaScript refers to JavaScript code that is executed on the client's web browser. It is embedded within the HTML or loaded as separate script files and runs directly on the user's device when they access a web page.


Server-Side JavaScript:
Server-side JavaScript refers to JavaScript code that is executed on the server, typically using a runtime environment like Node.js. Unlike client-side JavaScript, server-side JavaScript is not directly visible or accessible by users.
*/




// 18. What is the rest parameter and spread operator?

/*
Rest Parameter:
The rest parameter is denoted by three dots (...) followed by a parameter name inside a function declaration or function expression. It allows a function to accept an arbitrary number of arguments as an array. This is particularly useful when you want to pass an unknown or variable number of arguments to a function.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  console.log(sum(10, 20, 30));    // Output: 60

Spread Operator:
The spread operator is also denoted by three dots (...), but it is used in a different context. When used with arrays or objects, it "spreads" the elements of an array or the properties of an object into another array or object.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]



const obj1 = { name: "Alice", age: 30 };
const obj2 = { city: "New York", country: "USA" };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);
// Output: { name: "Alice", age: 30, city: "New York", country: "USA" }

*/





// 19. generator functions?

/*
Generator functions are a special type of function in JavaScript that allows you to pause and resume the execution of a function. They are denoted by using an asterisk (*) following the function keyword. 

They can be stopped midway and then continue from where they had stopped.

function* genFunc(){
  yield 3;
  yield 4;
}
genFunc();

The yield keyword is used inside the generator function to pause the execution and return a value. When a generator function encounters a yield statement, it returns an iterator result object with a value property set to the value after yield.
*/




// 19. destructuring in js?

/*
Destructuring is a feature that allows you to extract elements or properties from arrays or objects and assign them to variables in a more concise and convenient way. It provides a cleaner syntax for unpacking values, making it easier to work with complex data structures.

Array Destructuring:
With array destructuring, you can extract values from an array and assign them to individual variables.
*/

const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3



const [w, , z] = numbers;

console.log(w); // Output: 1
console.log(z); // Output: 3




const [m, n, p = 0] = numbers;

console.log(m); // Output: 1
console.log(n); // Output: 2
console.log(p); // Output: 3



/*
Object Destructuring:
With object destructuring, you can extract values from an object and assign them to variables with the same property names.

*/

const person = { names: "John", ages: 30 };
const { names, ages } = person;

console.log(names); // Output: "John"
console.log(ages); // Output: 30





const { names: personName, ages: personAge } = person;

console.log(personName); // Output: "John"
console.log(personAge); // Output: 30




const { names: personNames, ages: personAges, cities = "Unknown" } = person;

console.log(personNames); // Output: "John"
console.log(personAges); // Output: 30
console.log(cities); // Output: "Unknown"






// 20. Temporal Dead Zone?
//Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It is a behaviour where we try to access a variable before it is initialized.




// 21. Is JavaScript a pass-by-reference or pass-by-value language?

//JavaScript is a pass-by-value language.


function modifyValue(x) {
    x = 42; // Modifying the parameter inside the function
  }
  
  let num = 10;
  modifyValue(num);
  console.log(num); // Output: 10 (unchanged)




// 22. Async and Await in Js?

/*
async and await are keywords introduced to simplify asynchronous programming in JavaScript. They provide a more readable and structured way to work with Promises, making it easier to write and understand asynchronous code.

async Keyword:
The async keyword is used to define an asynchronous function. An asynchronous function returns a Promise implicitly, even if it doesn't explicitly use the return statement with a Promise. It allows the function to use the await keyword inside it.


await Keyword:
The await keyword can only be used inside an asynchronous function. It is used to pause the execution of the function until the Promise being awaited is resolved or rejected. The value of the resolved Promise is returned, or an error is thrown if the Promise is rejected.

*/




async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
}

const ans = fetchData().then((value) => {
  console.log(value); // ans
});
console.log(ans);
