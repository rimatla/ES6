/**
 * JavaScript ES6 - Template Literals
*  - Template Literal
 * Template strings are enclosed by the back-tick (`) (grave accent) character instead of double or single quotes. Template strings can contain place holders. These are indicated by the Dollar sign and curly braces (${expression}).
 */
//console.log('hello world');

//new line
// console.log('hello\n' +
// 'World');

//Template Literal
// console.log(`hello
// world`);

//Concatenation
let foo = 'bar';
let puppy = 'dog';
//console.log('The ' + puppy + ' likes to eat ' + foo);

//Template Literal
console.log(`The ${puppy} likes to eat ${foo}`);




/**
* feed Html from JS to the DOM
 */
let lastWord = 'enjoy!';
let templateLiteralsDemo =
`<h1>ES6 Template Literals</h1>
<p>Open you console to see more code in action, ${lastWord}</p>`;

document.getElementById('templateLiteralsEx').innerHTML = templateLiteralsDemo;


/**
 *  We can also use functions
 */
let cheers = 'cheers!';
let anotherTemplateLiteralsDemo =
    //function call
    `<h1>${makeUpperCase('ES6 ES6_TemplateLiterals')}</h1>
<p>Open you console to see more code in action, ${cheers}</p>`;
document.getElementById('anotherTemplateLiteralsEx').innerHTML = anotherTemplateLiteralsDemo;

function makeUpperCase(title) {
    //console.log(title);
    return title.toUpperCase();
}


let birthYear = 1985;
function getCurrentAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}
let message = `He was born ${getCurrentAge(birthYear)} years ago`;

console.log(message);
console.log(birthYear);


/**
 *  Unicode Syntax
 *  - \u{hex value}
 */
let stringFooter = `I \u{2764} JavaScript \u{00a9}`;
document.getElementById('footer').innerHTML = stringFooter;


/**
 *  foreach loop
 *  - ARRAY
 */
let people = [
    {name: 'Jack', apples: 4},
    {name: 'Speck', apples: 45},
    {name: 'Jose', apples: 32},
    {name: 'Mack', apples: 6},
];
people.forEach(function(drill) {
    console.log(`${drill.name} ate ${drill.apples}, cool uh?`);
});


/**
 * -Object
 */
let actor = {
    fName: 'John',
    lName:'Travolta'
};
function sayName() {
    return `His name is ${actor.fName} ${actor.lName}`;
}
console.log(sayName());



/**
 * BLOCK SCOPE
 * FROM MDN: let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of BLOCK scope.
 */
// varTest();
// letTest();
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

//Block visualization
function letTest() {
    let x = 1;
//*******************************************
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
//*************************************************
    console.log(x);  // 1
}

/**
 * const
 * - Read only Value, Once you define it it cannot be changed!
 */

var API_KEY = '846392ghkaebv8934';
//console.log(API_KEY);
API_KEY = '5465fehwsahwe';
//console.log(API_KEY);

const API_TOKEN = 'fdho89462hg433';
//console.log(API_TOKEN);
//API_TOKEN = '07856y038hgelfr';
//console.log(API_TOKEN); //error