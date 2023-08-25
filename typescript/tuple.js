"use strict";
// to decide that at what index which type of data should come and also limits length
// normal array
let role = ['admin', 'manager', 1, 3];
// tuple
let roles = ['admin', 'manager', 1, 3];
// to make tupple accept values that are not prefilled.
let roles1 = ['admin', 'manager', 1, 3];
roles1.push(true);
console.warn(roles1);
