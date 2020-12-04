const userName = 'abu';
/* userName = 'test'; // ERROR */
let age = 30;

age = 22;

if (age > 20) {
  let isOld = true;
}

/* console.log(isOld); ERROR */

/* function add(a: number, b: number) {
  let result = a + b;
  return result;
} */

let add = (a: number, b: number = 10) => {
  let result = a + b;
  return result;
};
const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking']; /* , ...hobbies */
/* Add all elements as new elements not as nested array (PUSH) */
activeHobbies.push(...hobbies)
console.log(activeHobbies)

const person = {
  firstName: 'Abu',
  userAge: 20
};

const copiedPerson = { ...person };
console.log(copiedPerson);

/* REST PARAMETERS */
const add2 = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue
  }, 0);
};

const addNumbers = add2(5, 1, 2, 7, 9);
console.log(addNumbers);

/* ARRAY AND OBJECT DESTRUCTURING */

/* const hobby1 = hobbies[0];
const hobby2 = hobbies[1]; */

let [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(`Hobbies: ${hobbies}`);
console.log(`Hobby1 : ${hobby1}, Hobby2: ${hobby2}, Remaining Hobbies: ${remainingHobbies}`);

const { firstName: user_name, userAge } = person;
console.log(person, user_name, userAge)