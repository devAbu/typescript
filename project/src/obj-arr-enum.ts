/* : object == : {} */
/* bad practice - 
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
} */

/* ENUMS */
enum Role { ADMIN = 5, READ_ONLY = 'USER', AUTHOR = 65 }; // Default => ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
/* to set start value => ADMIN = 5 --> READ_ONLY = 6, AUTHOR = 7 */

const person = {
  name: 'abu',
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  type: Role.ADMIN
}

/* Nested object */
const product = {
  id: 'abc',
  price: 12.99,
  tags: ["one", "two", "three"],
  details: {
    title: 'test',
    description: 'something'
  }
}
/* If we need to define the types: */
const product2: {
  id: string;
  price: number;
  tags: string[]; //array of strings
  details: {
    title: string;
    description: string;
  }
} = {
  id: 'abc',
  price: 12.99,
  tags: ["one", "two", "three"],
  details: {
    title: 'test',
    description: 'something'
  }
}

/* Array of numbers: number[] Array of strings and number: (string | number)[]
Array of any type: any[] */

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  /* console.log(hobby.map()) // ERROR - map does not exists on type STRING */
}