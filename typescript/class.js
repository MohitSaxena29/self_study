"use strict";
class App {
    constructor() {
        this.name = "Mohit";
        console.warn("Constructor");
    }
    getName() {
        console.warn(this.name);
    }
}
let a1 = new App();
a1.getName();
class Apps {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.warn(this.name);
    }
}
let a2 = new Apps("Mohit"); // to send values pre defined
a2.getName();
