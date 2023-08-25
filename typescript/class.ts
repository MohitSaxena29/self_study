class App{
    name="Mohit"
    constructor(){ // gets called automatically no need to call explicitly
        console.warn("Constructor");
    }
    getName(){
        console.warn(this.name)
    }
}

let a1=new App();
a1.getName();



class Apps{
    name;
    constructor(name){ // gets called automatically no need to call explicitly
        this.name=name;
    }
    getName(){
        console.warn(this.name)
    }
}

let a2=new Apps("Mohit"); // to send values pre defined
a2.getName();

