// to decide that at what index which type of data should come and also limits length

// normal array

let role:any[]=['admin','manager',1,3];

// tuple

let roles:[string,string,number,number]=['admin','manager',1,3];

// to make tupple accept values that are not prefilled.

let roles1:[string,string,number,number,boolean?]=['admin','manager',1,3];
roles1.push(true);

console.warn(roles1);