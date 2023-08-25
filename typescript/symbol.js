"use strict";
// It is a primitive datatype that gives unique id
let s1 = Symbol('Mi');
let s2 = Symbol('Mi');
console.log(s1); // Symbol(Mi)
console.log(s2.toString()); // Symbol(Mi) --- as string
console.warn(s1 === s2); // false
// as a key
// let s3={
//     [s1]:'Some data' // to use symbol use []
// }
// console.warn(s3[s1]); // Some data 
// as a class
class Demo {
    [s1]() {
        return "Some data";
    }
}
let d1 = new Demo();
console.warn(d1[s1]());
