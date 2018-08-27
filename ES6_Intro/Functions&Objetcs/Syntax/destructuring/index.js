/*****************************************************************************************************************************************
 THE OLD WAY
 *****************************************************************************************************************************************/
//let's take a look at how destructuring works with arrays
let cities = ['Boston', 'Seattle', 'New York', 'Minneapolis', 'Chicago'];

//how to access array ex
console.log(cities[0]);
console.log(cities[3]);


/*****************************************************************************************************************************************
 ES6
 *****************************************************************************************************************************************/
//update it to use destructuring
//pass in variables names + each coma (,) relates to a position in the array ps: 0 indexed!
let [,first,,,fourth,] = ['Boston', 'Seattle', 'New York', 'Minneapolis', 'Chicago','Detroit'];
console.log(first);
console.log(fourth);


/*****************************************************************************************************************************************
 THE OLD WAY
 *****************************************************************************************************************************************/
//destructuring is often used with objects as well
let  sandwich = {
  title:  'Ham & Cheese',
  price: 7,
  description: 'My Favorite Sandwich',
  ingredients: ['bread', 'mussarela', 'presunto sadia','ketchup']
};
console.log(sandwich.title);
console.log(sandwich.price);

/*****************************************************************************************************************************************
 ES6
 *****************************************************************************************************************************************/
//destructuring is often used with objects as well
let {title, price} = {
    title:  'Cheese & Ham',
    price: 9,
    description: 'My Favorite Sandwich',
    ingredients: ['bread', 'mussarela', 'presunto sadia','ketchup']
};

console.log(title);
console.log(price);

/*****************************************************************************************************************************************
 ES6
 *****************************************************************************************************************************************/
//destructuring is often used with objects as well
let vacation = {
    destination:  'Hawaii',
    travelers: 3,
    activity: 'surfing',
    cost: 3000
};

//to access the keys of the object, we can do so through a function
function vacationMarketing ({destination, activity}){ //access the properties by adding {}
    return  `Come to ${destination} and do some ${activity}.`
}

//log our vacationMarketing function and pass in the variable 'vacation'
//We grab our object,
//pass it into the vacationMarketing function,
//so it can parse it, ie: grab our destination and activity from the object.
console.log(vacationMarketing(vacation));

/**We have passed IN our vacation object. The vacationMarketing function parses it, and we can access all of these values by using variables.*/