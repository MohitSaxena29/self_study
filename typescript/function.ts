
// to define return type of a function -> function function_name():type{}
// eg function cals():string{} // then it will only return string value

function cals(a:number,b:number):number{
    return a+b;
}
console.warn(cals(10,10))


// if we want one argument/parameter to be optional we use ?

function func(a:number,b?:number):number{
    return b?a+b:a;
}
console.warn(func(100))