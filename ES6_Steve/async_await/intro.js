let url = 'https://jsonplaceholder.typicode.com/posts/';

//******************************** Promises approach *******************************//
const makeRequest = () =>
    fetch(url)
        .then(data => {
            console.log(data);
            return "done with promises"
        });

makeRequest(); //=> status 200

//******************************** async await approach *******************************//
const makeAsyncRequest = async () => {
    //console log will wait until promise resolves and print its value.
    console.log(await fetch(url));
    return "done with async await"
};

makeAsyncRequest(); //=> status 200

/*
-  await can only be used inside functions defined with async
- async function returns a promise implicitly
- the RESOLVED value of the promise will be whatever you RETURN from the function
ie:"done with async await"
 */

//Error handling
//Async/await makes it finally possible to handle both synchronous and asynchronous errors with the same construct,
//good old try/catch
const makeRequest = async () => {
    try {
        // this parse may fail
        const data = JSON.parse(await getJSON());
        console.log(data)
    } catch (err) {
        console.log(err)
    }
};

//intermediate values
const makeRequest = async () => {
    const value1 = await promise1()
    const value2 = await promise2(value1)
    return promise3(value1, value2)
};