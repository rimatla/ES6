//generators = a function that can be entered and exited multiple times
//normally we call a function, it runs, outputs some value and done.

//if generators we can run some code, return a value and go right back into the function at the same place that we've left.

//to create a generator ( * )
function* numbers() {
    yield;
}

const genn = numbers();
console.log(genn.next()); //-> { value: undefined, done: false }
console.log(genn.next()); //-> { value: undefined, done: true } ??? What ????

function* shopping() {
    //stuff on the sidewalk
    //walking down the sidewalk
    //go into the store w/ cash
    const stuffFromStore =  yield 'cash';
    //continue walking to laundry-mat
    const cleanClothes =  yield 'laundry';
    //walking back home
    return [ stuffFromStore, cleanClothes];
}

//stuff in the store
const gen = shopping();
console.log(gen.next()); //leaving our house
//walked into the store
//shop around
//complete purchase
console.log(gen.next('groceries')); //leaving the store with groceries
console.log(gen.next('clean clothes'));

/***************************************************************************************************************************/

/***************************************************************************************************************************/
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';

}

const generator = colors();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

const myColors = [];
//generators work great w/ 'for of loops'
//iterates through each yield iteration
for (let color of colors()) {
    myColors.push(color)
}

console.log(myColors);

/* When can use generators to iterate over wildly different data structures*/