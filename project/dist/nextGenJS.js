"use strict";
const userName = 'abu';
let age = 30;
age = 22;
if (age > 20) {
    let isOld = true;
}
let add = (a, b = 10) => {
    let result = a + b;
    return result;
};
const printOutput = output => console.log(output);
printOutput(add(5));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstName: 'Abu',
    userAge: 20
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const add2 = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const addNumbers = add2(5, 1, 2, 7, 9);
console.log(addNumbers);
let [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(`Hobbies: ${hobbies}`);
console.log(`Hobby1 : ${hobby1}, Hobby2: ${hobby2}, Remaining Hobbies: ${remainingHobbies}`);
const { firstName: user_name, userAge } = person;
console.log(person, user_name, userAge);
//# sourceMappingURL=nextGenJS.js.map