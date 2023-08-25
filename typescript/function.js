"use strict";
// to define return type of a function -> function function_name():type{}
// eg function cals():string{} // then it will only return string value
function cals(a, b) {
    return a + b;
}
console.warn(cals(10, 10));
// if we want one argument/parameter to be optional we use ?
function func(a, b) {
    return b ? a + b : a;
}
console.warn(func(100));
