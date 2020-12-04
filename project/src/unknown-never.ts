/* UNKNOWN AND NEVER */
let userInput: unknown
let userName: string;

userInput = 5
userInput = 'abu'

if (typeof userInput === 'string') {
  userName = userInput
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
/* Never return anything */

generateError('juhu', 120)