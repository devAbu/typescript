/* function add(n1, n2) {
  return n1 + n2;
} */

let add = (n1: number, n2: number, showResult: boolean, resultMessage: string) => {
  const result = n1 + n2

  if (showResult) {
    console.log(resultMessage + result)
  } else {
    return n1 + n2
  }
}

const number1 = 5;
const number2 = 10;
const printResult = true;
const resultPhrase: string = 'Result is: '; // bad practice
let undefine: number; // good practice

/* const result = add(number1, number2, printResult);
console.log(result); */
add(number1, number2, printResult, resultPhrase);