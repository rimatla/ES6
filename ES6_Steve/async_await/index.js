/*
Async functions return a Promise.
If the function throws an error, the Promise will be rejected.
If the function returns a value, the Promise will be resolved.
 */

/****************************************************************************
//FETCH
 ***************************************************************************/

const fetch = require('node-fetch');
const url = 'https://jsonplaceholder.typicode.com/users/';
const imgUrl =  'https://jsonplaceholder.typicode.com/photos/';

//Chaining Promises
const fetchData = (userId) => {
    return fetch(`${url}${userId}`)
        .then(res => res.json())
        .then(data => console.log(data.name));
};

fetchData(1);

//async await
const fetchAsyncData = async (userId) => {
    const response = await fetch(`${url}${userId}`); //fetch response
    const data = await response.json(); //get data
    console.log(data.name);
};

fetchAsyncData(3);

/****************************************************************************
 //More examples
 ***************************************************************************/
const asyncFun = async () => {
    var value = await Promise
        .resolve(5) //start value
        .then(x => x * 3)
        .then(x => x + 5)
        .then(x => x / 2);
    return value;
};
asyncFun().then(x => console.log(`x: ${x}`));


/****************************************************************************
 //Promise All
 ***************************************************************************/
/*
The following example shows how you could await on three different promises that could be resolved concurrently.
Given that await suspends your async function and the await Promise.all expression ultimately resolves into a results array,
we can use destructuring to pull individual results out of that array
 */
async function concurrent () {
    let [res1, res2, res3] = await Promise.all([promise1, promise2, promise3]);
}

/*
You could still do something like all = Promise.all.bind(Promise) to obtain a terse alternative to using Promise.all.
An upside of this is that you could do the same for Promise.race,
which didn't have an equivalent to await*
 */
const all = Promise.all.bind(Promise);
async function concurrent () {
    var [res1, res2, res3] = await all([promise1, promise2, promise3]);
}


/****************************************************************************
 //More examples
 ***************************************************************************/

//function will take a number as input and will resolve two seconds later with the number doubled.
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(x * 2);
        }, 2000)
    });
}
//output promise value
//invoke function
//Then, after the promise has resolved, take returned value and log it to the console.
doubleAfter2Seconds(3).then(res => console.log('first double =',res));


//***********what if we want to run a few different values through our function and add the result?
//One possible solution is to set up a promise chain.
function addPromise(num) {
    return new Promise(resolve => {
        doubleAfter2Seconds(10) //=> 20
            .then((p1) => {
                doubleAfter2Seconds(20) //=> 40
                    .then((p2) => {
                        doubleAfter2Seconds(30) //=> 60
                            .then((p3) => {
                                resolve(num + p1 + p2 + p3); //10 + 20 + 40 + 60
                            })
                    })
            })
    });
}

addPromise(10).then((sum) => {
    console.log('promises sum =', sum); //=> 130
});

//Switching from Promises to Async/Await.
let addAsync = async (x) => {
    //await keyword which will pause our code
    //until the Promise has resolved
    let p1 = await doubleAfter2Seconds(10);
    let p2 = await doubleAfter2Seconds(20);
    let p3 = await doubleAfter2Seconds(30);
    return x + p1 + p2 + p3;
};

addAsync(10).then(sum => console.log('async sum =',sum));


/****************************************************************************
 //Try / Catch
 ***************************************************************************/
function logFetch(myUrl) {
    return fetch(myUrl)
        .then(response => response.text())
        .then(text => {
            console.log('Awesome it worked!',text);
        }).catch(err => {
            console.error('Dang the fetch failed', err);
        });
}
logFetch(url);

//same thing using async functions:
async function logFetch(myUrl) {
    try {
        let response = await fetch(myUrl);
        console.log('ASYNC in da house',await response.text());
    } catch (err) {
        console.log('Dang the fetch failed',err);
    }
}

logFetch(url);
//Note: Anything you await is passed through Promise.resolve(), so you can safely await non-native promises.