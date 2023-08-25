// it is a block of code jiske andar hamara interelated code hota hai
// to use reference (namespace) we use below syntax

/// <reference path="./utils.ts"/>
namespace UsersUtils
{
    export class Users extends Parent implements userType{
        getName()
        {
            return this.name;
        }
    }

}

let u1=new UsersUtils.Users();
u1.setName('Mohit');
console.warn(u1.getName());