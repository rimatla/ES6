//we can implement every other helper that we've covered thus far by just using the REDUCE helper

let numbers = [10, 20, 30];
//sum of the numbers in the array
let sum = 0; //initializer

for (var i = 0; i < numbers.length; i++) {
    sum +=  numbers[i];
}
console.log('for loop sum:', sum);



/************************************************************************/

/************************************************************************/
//reduce (accumulator, iterator)
let totalSum = numbers.reduce((sum, number) => {
    return sum + number;
}, 0); //initial value
console.log('reduce sum:', totalSum);

/************************************************************************/

/************************************************************************/
//retrieve all the 'values' in a object
let primaryColors = [
    {color: 'red'},
    {color: 'green'},
    {color: 'blue'},
];

let values = primaryColors.reduce((prev, primaryColor) => {
    prev.push(primaryColor.color);
    console.log(prev);
    return prev;
}, []); //initial value as an array
console.log('colors:', values);

/************************************************************************/

/************************************************************************/
//given a string that contains a number of (), is the string balanced?

//a function that takes a string and returns a boolean of some kind (expression balanced or not)?
function balancedParens(string) {
    //turn string into an array of single chars
    //trick to return/flip a boolean value (!)
    return !string.split('')
        .reduce((prev, char) => {
            //catch 22
            if (prev < 0) {
                return prev
            }
            if (char === '(' ) {
                return ++prev //increment
            }
            if (char === ')' ) {
                return --prev //decrement
            }
            return prev; //return counter anyway
        }, 0); //counter as an initial value
}

/*
0 is the point balance here, so whenever the increment and/or decrement swayed any result other than 0, it will be false ie: unbalanced
 */

console.log('balance =', balancedParens(')()()('));

/************************************************************************/

/************************************************************************/
//Use the 'reduce' helper to find the sum of all the distances traveled.
// /Assign the result to the variable 'totalDistance'
let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

let totalDistance = trips.reduce((prev, trip) => {
    return prev + trip.distance;
}, 0);//initial value

console.log(totalDistance);

/************************************************************************/

/************************************************************************/
//create an object that tallies the number of sitting and standing desks.
//The object returned should have the form '{ seat: 3, stand: 2 }'.
let desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

let deskTypes = desks.reduce(function(prev, desk) {
    if (desk.type === 'sitting') {
        ++prev.seat
    } else {
        ++prev.stand;
    }
    return prev;

}, { seat: 0, stand: 0 }); //initial value
console.log(deskTypes);

/************************************************************************/

/************************************************************************/
// Write a function called 'unique' that will remove all the duplicate values from an array.
let more_numbers = [1, 1, 2, 3, 3, 3, 4, 4];
function unique(array) {
    return array.reduce((prev, el) => {
        //includes() method determines whether an array includes a certain element, returning true or false as appropriate.
        if (!prev.includes(el)) {
            console.log(prev);
            prev.push(el);
        }
        return prev;
    }, []); //initialize to empty array
}

console.log(unique(more_numbers));
