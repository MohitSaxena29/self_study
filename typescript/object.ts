// {name:string,age:number,email:string} // ye ek object ka type hai

const person:{name:string,age:number,email:string}={
    name:"Mohit",
    age:20,
    email:'mm@gmail.com'
}
console.warn(person.name);

const user:{name:string,age:number,email:string}={
    name:"Rohit",
    age:20,
    email:'mm@gmail.com'
}

console.warn(user.name);

// to avoid writing same data multiple times when different objects have same type
// make object Type
type objType={name:string,age:number,email:string};
const avoid:objType={
    name:"Sohit",
    age:20,
    email:'mm@gmail.com'
}
// OR
interface usersTyped{
    name:string,
    age:number,
    email:string
}
const avoidS:usersTyped={
    name:"Lohit",
    age:20,
    email:'mm@gmail.com'
}


console.warn(avoid.name);