/* Interfaces - define/describe the structure of the object or function- custom type*/
/* type Person = {..} */
interface Person {
  /* Access modifiers can not be added in Interface, but READONLY can */
  name: string; //can not assign a value to the variable
  age: number;

  greet(phrase: string): void;
}

let user1: Person; // Interface as a type

user1 = {
  name: 'Abu',
  age: 22,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi,');

/* INHERITANCE/EXTEND INTERFACE */
interface Named {
  readonly name: string;
  outputName?: string; // ? - optional property
  someFunction?(something: string): void // ? - optional method
}

interface Greetable extends Named { // for multiple use ","
  greet(phrase: string): void;
}

class User implements Greetable { //for multiple use ","
  name: string; // with readonly in Interface, this will also be readonly
  /* name?: string; //optional property */
  age: number = 22;
  constructor (name: string) { // name?: string - optional...or set default value for parameter
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}
let user: Greetable;
user = new User('Abu');
console.log(user)
user.greet('Hi')

/* Define function type with TYPE */
/* type AddFun = (n1: number, n2: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;
*/

/* USING INTERFACE */
/* CUSTOM TYPES (EXAMPLE ABOVE) IS USED COMMONLY */
interface AddFn {
  (n1: number, n2: number): number; //as defining function just without its name
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

console.log(add(5, 4))