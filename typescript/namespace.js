"use strict";
// it is a block of code jiske andar hamara interelated code hota hai
// to use reference (namespace) we use below syntax
/// <reference path="./utils.ts"/>
var UsersUtils;
(function (UsersUtils) {
    class Users extends UsersUtils.Parent {
        getName() {
            return this.name;
        }
    }
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
let u1 = new UsersUtils.Users();
u1.setName('Mohit');
console.warn(u1.getName());
