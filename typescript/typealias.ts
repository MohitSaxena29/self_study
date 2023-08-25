// typealias -> deifne type as variable and then resue it

let a:string|number|undefined=10;
let b:string|number|undefined='Mohit';
let c:string|number|undefined=20;
let d:string|number|undefined=undefined;

// to avoid the repetition of type in above code as type of all code is same

type varType=string|number|undefined;

let e:varType=10;
let f:varType='Mohit';
let g:varType=20;
let h:varType=undefined;