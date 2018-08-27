//ES6 brings a native implementation of promises outta the box:  new Promise();

/*
- Promises can be: unresolved, resolved or rejected
- By default promises will exist on a unresolved state
- then() and catch() sit on top of promises, and are meant to register call backs
 */

//create a promise
let promise = new Promise((resolve, reject) => { //no third party library
    setTimeout(() => {
        resolve();
    }, 3000);
    //reject();
});
//console.log(promise);

//then will not be executed if promise gets rejected
promise
    .then(() => console.log('We\'re finished!'))
    .then(() => console.log('Me too!'))
    .catch(() => console.log('Failed')); //only when promise gets rejected



