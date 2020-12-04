"use strict";
let combine = (input1, input2, resultType) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedNamesAges = combine('30', '26', 'as-number');
console.log(combinedNamesAges);
const combineNames = combine("Abu", "Almo", 'as-text');
console.log(combineNames);
function greet(user) {
    console.log(user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greet2(user) {
    console.log(user.name);
}
function isOlder2(user, checkAge) {
    return checkAge > user.age;
}
//# sourceMappingURL=union-aliases.js.map