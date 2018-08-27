let numbers = [1,2,3];
//avoid mutating data
let doubledNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    /*
    avoid mutating data
    numbers[i] = numbers[i] * 2;
     */
   doubledNumbers.push(numbers[i] * 2);
}
//console.log(doubledNumbers);

//map always needs a return statement
let doubled = numbers.map(number => number * 2);
console.log(doubled);


/*****************************************************************************************************************************/
//object
let cars = [
    { maker : 'BMW', price: '$1'},
    {maker: 'Mercedes', price: '$3'}
];

//get car prices
let prices = cars.map(car => car.price);
console.log(prices);


/*****************************************************************************************************************************/
//create a new array that contains the 'height' property of each object
let images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

//Assign this new array to a new variable to avoid mutating data
let heights = images.map(image => image.height);
console.log(heights);


/*****************************************************************************************************************************/
//create a new array that contains the distance / time value from each trip
let trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

//Assign this new array to a new variable to avoid mutating data
let speeds = trips.map(trip => trip.distance / trip.time);
console.log(speeds);


/*****************************************************************************************************************************/
//Implement a 'pluck' function.
//Pluck should accept an array and a string representing a property name and return an array containing that property from each object.

let paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

let pluckValues = (array, property) => {
    return array.map(o => o[property]);
};
console.log(pluckValues(paints, 'color'));