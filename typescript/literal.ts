// when we assign data in place of datatype it is called literal
  
// In programming, a literal is a notation that represents a fixed value in code. It's a way to directly specify a value of a certain type, such as a number, string, boolean, or more complex data types. Literals are used to provide actual data rather than referring to variables or expressions that compute values.

function combine(a: number | string,b:number|string,type:"as-number"|"as-string"){
    if(type === "as-number"){
        return (+a)+(+b);
    }
    else{
        return a.toString()+b.toString();
    }
}

console.log(combine(10,20,"as-number"));
console.log("mohit","saxena","as-string")



type Direction = "north" | "south" | "east" | "west";
let myDirection: Direction = "north"; // Valid
// let invalidDirection: Direction = "diagonal"; // TypeScript error
