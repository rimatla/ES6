//method that takes an user an password and saves ti ti to a DB
/*
By destructuring, you no longer have to worry with the ORDER when you call and pass arguments to a
method down bellow 100000 lines of code!
Order doest matter.
 */
function signUp({username, password, email, DOB, city}) { //long list of arguments
    //create new user
}
const user = {
  username: 'myname',
  password: 'mypass',
  email: 'myemail@me.com',
  DOB: '1/1/1901',
  city: 'Denver'
};
//signUp('myname', 'mypass', 'myemail@me.com', '1/1/1901', 'Denver');
signUp(user);

/******************************************************************************/
//destructuring array
//transform an array of arrays INTO an array of objects
//that contains an x and y property
const points = [
  [4,5],
  [10,1],
  [0,40],
];

//how to with ES6
const transform = points.map(([x,y]) => {
  //return {x:x, y:y};
  return {x, y};
});
console.log(transform);

/******************************************************************************/
//Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher'
// and assign the result to a variable 'classesAsObject. Use array destructuring and the map helper
const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};
});
console.log(classesAsObject);


/******************************************************************************/
// Recursion with Destructuring
// Use array destructuring, recursion, and the rest/spread operators
// to create a function 'double' that will return a new array
// with all values inside of it
// multiplied by two.
const numbers = [1, 2, 3];

function double([num, ...rest]) {
    if (rest.length) {
        return [num * 2, ...double(rest)]
    }
    return [num * 2];
}
console.log(double(numbers));