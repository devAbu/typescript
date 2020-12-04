/* UNION TYPES & LITERAL TYPES */

/* Type Aliases / custom type */

type Combinable = number | string


let combine = (input1: Combinable, input2: number | string, resultType: 'as-number' | 'as-text') => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString()
  }
  return result;
  /* if (resultType === 'as-number') {
    return +result;
  } else {
    return result;
  } */
}


const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedNamesAges = combine('30', '26', 'as-number')
console.log(combinedNamesAges)

const combineNames = combine("Abu", "Almo", 'as-text')
console.log(combineNames)

/* Aliases example: */
function greet(user: { name: string, age: number }) {
  console.log(user.name)
}

function isOlder(user: { name: string, age: number }, checkAge: number) {
  return checkAge > user.age
}

/* Can be converted to */
type User = { name: string, age: number }

function greet2(user: User) {
  console.log(user.name)
}

function isOlder2(user: User, checkAge: number) {
  return checkAge > user.age
}