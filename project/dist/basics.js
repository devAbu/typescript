"use strict";
let add = (n1, n2, showResult, resultMessage) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(resultMessage + result);
    }
    else {
        return n1 + n2;
    }
};
const number1 = 5;
const number2 = 10;
const printResult = true;
const resultPhrase = 'Result is: ';
let undefine;
add(number1, number2, printResult, resultPhrase);
//# sourceMappingURL=basics.js.map