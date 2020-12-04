"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'abu';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('juhu', 120);
//# sourceMappingURL=unknown-never.js.map