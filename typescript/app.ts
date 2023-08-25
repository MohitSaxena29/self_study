const num:number=10;
const str:string='10';
const isTrue:boolean=true;

function add(a:number,b:number){
    return a+b;
}

let result=add(10,12);
console.warn(result);


// Topic - Type Inference in TypeScript

// apne aap idea laga lena value ke base par ki usme kya value hoge
// by default value is any 

var a;
var data=10;
// data='kso';

// to store only a specific value in variable

var ad:5=5;
// ad=10;


// for const

const datas='hi';
// as value of const is not changed hence its type is by defualt
// the value that is assigned to it



