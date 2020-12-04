/* GENERICS - TYPE<T> */
const names: Array<string> = ['Abu', 'Combe'] // string[]

const promise: Promise<string> = new Promise((resolve, reject) => { // Default type: Promise<unknown>
  setTimeout(() => {
    resolve('This is done'); // will get an error from Typescript if we use non-string type
  }, 1000)
});

promise.then(data => {
  data.split(' ') // will get an Error from Typescript if we try to use number functions
})