"use strict";
let user1;
user1 = {
    name: 'Abu',
    age: 22,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi,');
class User {
    constructor(name) {
        this.age = 22;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user;
user = new User('Abu');
console.log(user);
user.greet('Hi');
let add;
add = (n1, n2) => n1 + n2;
console.log(add(5, 4));
//# sourceMappingURL=app.js.map