"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "USER";
    Role[Role["AUTHOR"] = 65] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'abu',
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    type: Role.ADMIN
};
const product = {
    id: 'abc',
    price: 12.99,
    tags: ["one", "two", "three"],
    details: {
        title: 'test',
        description: 'something'
    }
};
const product2 = {
    id: 'abc',
    price: 12.99,
    tags: ["one", "two", "three"],
    details: {
        title: 'test',
        description: 'something'
    }
};
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=obj-arr-enum.js.map