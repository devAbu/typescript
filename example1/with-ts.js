/* Shows error when the variables name are the same as in other files */
var addButton = document.querySelector('button');
var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
function adding(num1, num2) {
    return +num1 + +num2;
}
button.addEventListener('click', function () {
    /* .value - error = variable with type HTMLElement does not have property value -> without defined type */
    console.log(add(+number1.value, +number2.value));
});
