/*
Generators are a new type of function that allow us to pause functions in the middle of execution, to be resumed later.
You know you're looking at a generator when you see an asterisk immediately following the function keyword
Sometimes you'll see people use the asterisk right before the function name.
We hit pause within a function by using the new 'yield' keyword. And this can be used multiple times within the same function.
 */

//create a generator
function* director(){
    //emulate a director counting down from three
    yield 'three';
    yield 'two';
    yield 'one';
    yield 'action!';
}

//store the call of this generator function in a variable called action.
let action = director();

// Remember, each time we use a yield statement, we need to restart the function
// to do this, use the next() function, which will jump to the next 'yield'

/**
 * if we call next each and every time we see yield, we need to restart this five different times.
 * chain on .value to access the actual value versus seeing the entire object
 * */

console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);



/***********************************************************************************************************************************************
 - Generators more often than not, are used when we're dealing with some sort asynchronous event.
 - Like an external event or maybe a timer for instance.
 ***********************************************************************************************************************************************/

function* eachItem(arr){
    for(let i=0; i<arr.length; i++) {
        //within the body of our for loop, we want to yield the item in the array
        yield arr[i];
    }
}

let letters = eachItem(['a','b','c','d','e','f','g']);

let abcs = setInterval(function(){
    let letter = letters.next(); //this is going to move onto our next yield statement
    //if true
    if(letter.done) {
        clearInterval(abcs);
        console.log('Now I know my ABC\s!');
    } else {
        //log the value of the letters to the console till it's done!
        console.log(letter.value);
    }
},500);

/*
Here we advanced to the next yield statement every 500 milliseconds, until when we're out of yield statements, when done is rendering as true,
Then we'll just print out "Now I know my ABCs."
Generators make it much easier to create asynchronous functions, and the benefits are really quick to observe in something like this.
  */