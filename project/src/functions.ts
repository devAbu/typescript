/* Return type function fn_name(): returnType - do not assign return type if there is no specific reason */
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result : " + num)
}

function addAndHanlde(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(10, 7))

/* let combineValues: Function; --> any type of function*/
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8))

addAndHanlde(10, 10, (result) => {
  console.log(result)
})