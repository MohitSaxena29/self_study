// when a child inherits some property from their parent

class Parent{
    name;
    setName(name){
        this.name=name;
    }
}
class Child extends Parent{
    name:'Mohit';
    getName(){
        return this.name;
    }
}

let c1=new Child();
// console.warn(c1.getName());
c1.setName('Mohit Saxena');
// if we remove entends then it will give error
console.warn(c1.getName());