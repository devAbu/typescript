"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : " + num);
}
function addAndHanlde(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(10, 7));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHanlde(10, 10, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map