// when we assign data in place of datatype it is called literal
function combine(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20, "as-number"));
console.log("mohit", "saxena", "as-string");
var myDirection = "north"; // Valid
// let invalidDirection: Direction = "diagonal"; // TypeScript error
