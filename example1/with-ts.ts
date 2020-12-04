/* Shows error when the variables name are the same as in other opened files */
const addButton = document.querySelector('button');
const number1 = document.getElementById('num1')! as HTMLInputElement;
const number2 = document.getElementById('num2')! as HTMLInputElement;

function adding(num1: number, num2: number) {
  return +num1 + +num2;
}


addButton.addEventListener('click', function () {
  /* .value - error = variable with type HTMLElement does not have property value -> without defined type */
  console.log(adding(+number1.value, +number2.value));
});
