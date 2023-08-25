// Normal Function

// function users(data:Object):Object{
//     return data;
// }
// // console.log(users({name:"Mohit",age:"20"}));
// console.log(users({name:"Mohit"}));


// Generic Fucntion

// ye har tarah ke output le skta hai and return kar skta hai


function users<T>(data:T):T{
    return data;

}

// console.log(users("Mohit"));
// console.log(users(20));
// console.log(users({name:"Mohit",age:20}));
// console.log(users({name:"Mohit",age:20}).age);

