// unknown is more safe as compared to any

let data:any;
data=20;
data='hello';

let datas:unknown;
data=20;
data='hello';

let item:string;
// here data has type any so it will not give any error whether type of data is string or not 
item=data;
// nut here datas has type unknown so it will raise an error such that // Type 'unknown' is not assignable to type 'string' as  unknown is little bit smart as compared to any
// item=datas;

// to use with unknown


// now it will work fine

if(typeof data==='string'){
    item=data;
}