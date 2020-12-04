"use strict";
var _a;
const e1 = {
    name: 'Abu',
    privileges: ['test', 'test2'],
    startDate: new Date()
};
function adding(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    if ('privileges' in emp) {
        console.log(`Name: ${emp.name}...Privileges: ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`Name: ${emp.name}...Start date: ${emp.startDate}`);
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log(`Loading ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
moveAnimal({ type: 'horse', runningSpeed: 100 });
const userInput = document.getElementById('user-input');
userInput.value = 'Hi there';
const errorBag = {
    email: 'Not valid email',
    5: 'Five'
};
function plus(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = plus(1, 5);
const result2 = plus('Abu', 'Almo');
const fetchedUserData = {
    id: 'u1',
    name: 'abu',
    job: { title: 'developer', description: 'my job' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const someInput = '';
const storedData = someInput !== null && someInput !== void 0 ? someInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map