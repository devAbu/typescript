/* INTERSECTION TYPES - allows to combine other types */
type Admin = {
  name: string;
  privileges: string[]
};

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
/* interface ElevatedEmployee extends Admin, Employee{} */

const e1: ElevatedEmployee = {
  name: 'Abu',
  privileges: ['test', 'test2'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

/* TYPE GUARDS */
function adding(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: unknownEmployee) {
  /* if(typeof emp ==='object'){} can not help*/
  if ('privileges' in emp) { //check if PRIVILEGES is a property inside the object
    console.log(`Name: ${emp.name}...Privileges: ${emp.privileges}`)
  }
  if ('startDate' in emp) {
    console.log(`Name: ${emp.name}...Start date: ${emp.startDate}`)
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log(`Loading ${amount}`)
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  /* if ('loadCargo' in vehicle) {
    vehicle.loadCargo(500);
  } */
  if (vehicle instanceof Truck) { // doesn't work with INTERFACE
    vehicle.loadCargo(500);
  }
}

useVehicle(v1);
useVehicle(v2);

/* Discriminated Unions - special type of Type Guards - with union type*/

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  /* if ('flyingSpeed' in animal) { } */
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log(`Moving with speed ${speed}`);
}

moveAnimal({ type: 'horse', runningSpeed: 100 })

/* TYPE CASTING */

/* const userInput = <HTMLInputElement>document.getElementById('user-input')!; */
const userInput = document.getElementById('user-input')! as HTMLInputElement;
/* ! - Tells it will never be of a type null */

userInput.value = 'Hi there';

/* INDEX PROPERTIES */

interface ErrorContainer {
  //{email: 'Not valid email', username: 'At least 3 characters'}
  [prop: string]: string;
  //id: string; //can not be number since INDEX is string
}

const errorBag: ErrorContainer = {
  email: 'Not valid email',
  5: 'Five'
};

/* FUNCTION OVERLOADS - function with multiple types of parameters*/
function plus(a: number, b: number): number;
/* function plus(a: number): number; - if second parameter (b) is optional */
function plus(a: string, b: string): string;
function plus(a: number, b: string): string;
function plus(a: string, b: number): string;
function plus(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = plus(1, 5); // type = Combinable 
const result2 = plus('Abu', 'Almo'); // type = Combinable - can not use any string function (it will work, but Typescript will show an error while the type of result2 is not a String) - without FUNCTION OVERLOADS
/* const result2 = plus('Abu', 'Almo') as string; - one way to resolve the problem, not good practice */

/* Optional Chaining */

const fetchedUserData = {
  id: 'u1',
  name: 'abu',
  job: { title: 'developer', description: 'my job' }
};

/* console.log(fetchedUserData.job && fetchedUserData.job.title) - JS*/
console.log(fetchedUserData?.job?.title);

/* Nullish Coalescing */
const someInput = '';
/* const storedData = someInput || 'DEFAULT'; - one way - falsy*/
const storedData = someInput ?? 'DEFAULT'; // NULL or UNDEFINED
console.log(storedData)