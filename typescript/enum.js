/*
In TypeScript, an enum is a data type that represents a set of named values. It provides a way to define a collection of related constants with names, making the code more readable and self-documenting.
*/
//An enum is a special "class" that represents a group of constants (unchangeable variables).
// by default enum gives 0,1,2 ... roles
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["read_only_user"] = 2] = "read_only_user";
})(Role || (Role = {}));
console.warn(Role);
console.warn(Role.manager); //  o/p : 1
// to give custom role
var Days;
(function (Days) {
    Days["mon"] = "mon";
    Days["tue"] = "tue";
})(Days || (Days = {}));
var whichDay;
whichDay = Days.mon;
console.warn(whichDay); // mon
// if we give any custom number to start element then all other elements will get consecutive roles(numbers) from there
var Day;
(function (Day) {
    Day[Day["mon"] = 10] = "mon";
    Day[Day["tue"] = 11] = "tue";
    Day[Day["wed"] = 12] = "wed";
})(Day || (Day = {}));
function whichDays(day) {
    return day;
}
console.warn(whichDays(Day.wed)); // o/p 12
// if we give any custom number in between element then all other elements before that element will get consecutive roles(numbers) start from zero and other elements to the right will get consecutive roles(numbers) from there
//An enum is a special "class" that represents a group of constants (unchangeable variables).
// eg Day.mon=0 , Day.tue=11 , Day.wed=12
var Da;
(function (Da) {
    Da[Da["mon"] = 0] = "mon";
    Da[Da["tue"] = 11] = "tue";
    Da[Da["wed"] = 12] = "wed";
})(Da || (Da = {}));
function whichDa(day) {
    return day;
}
console.log('Function');
console.warn(whichDa(Da.mon)); // o/p 0
console.warn(whichDa(Da.wed)); // o/p 12
// heterogenous enum
var hereto;
(function (hereto) {
    hereto["data1"] = "Mohit";
    hereto[hereto["data2"] = 2] = "data2";
})(hereto || (hereto = {}));
console.log("Heterogneous");
console.log(hereto.data1);
console.log(hereto.data2);
