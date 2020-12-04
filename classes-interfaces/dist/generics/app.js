"use strict";
const names = ['Abu', 'Combe'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 1000);
});
promise.then(data => {
    data.split(' ');
});
//# sourceMappingURL=app.js.map