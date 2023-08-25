"use strict";
/*
An Interface is a structure which acts as a contract in our application. It defines the syntax for classes to follow, means a class which implements an interface is bound to implement all its members.
*/
let users = {
    name: 'Mohit',
    age: 20,
    getName: function () {
        return 'Mohit Saxena';
    }
};
console.warn(users);
console.warn(users.getName());
