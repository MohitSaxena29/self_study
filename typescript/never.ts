function tryReturn(){
    // return true;
}
console.log(tryReturn());
  


// means this below function give an error and will not return anything not even undefined.
function apiError(msg,code):never{
    throw {message:msg,apiCode:code}
}
console.log(apiError("server side error",500));
