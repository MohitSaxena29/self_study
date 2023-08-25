/*
In TypeScript, an enum is a data type that represents a set of named values. It provides a way to define a collection of related constants with names, making the code more readable and self-documenting.
*/

//An enum is a special "class" that represents a group of constants (unchangeable variables).

// by default enum gives 0,1,2 ... roles

enum Role{
    admin,manager,read_only_user
}

console.warn(Role);
console.warn(Role.manager); //  o/p : 1


// to give custom role

enum Days{
    mon='mon',tue='tue'
}

let whichDay:Days;
whichDay=Days.mon;
console.warn(whichDay); // mon


// if we give any custom number to start element then all other elements will get consecutive roles(numbers) from there


enum Day{
    mon=10,tue,wed
}

function whichDays(day:Day){
    return day;
}

console.warn(whichDays(Day.wed)) // o/p 12


// if we give any custom number in between element then all other elements before that element will get consecutive roles(numbers) start from zero and other elements to the right will get consecutive roles(numbers) from there

//An enum is a special "class" that represents a group of constants (unchangeable variables).

// eg Day.mon=0 , Day.tue=11 , Day.wed=12


enum Da{
    mon,tue=11,wed
}

function whichDa(day:Da){
    return day;
}

console.log('Function');

console.warn(whichDa(Da.mon)) // o/p 0
console.warn(whichDa(Da.wed)) // o/p 12


// heterogenous enum

enum hereto{
    data1='Mohit',
    data2=2
}

console.log("Heterogneous");
console.log(hereto.data1);
console.log(hereto.data2);


