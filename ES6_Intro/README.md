# Intro to ES6
## ECMAScript 6, or ES6 is the latest version of the specification for JavaScript

````
By Eve Porcello
- ECMAScript 6, or ES6, is the latest version of the specification for JavaScript
- ECMA, or the European Computer Manufacturer Association, is the governing body that provides the ECMAScript specifications for JavaScript browser implementations.
- As of June 2015, we now have an official spec for ECMAScript 6,
- So what does this mean for us as JavaScript developers?
- It means that we now have a ton of new options to work with when designing our JavaScript projects.

- We have new keywords available for declaring variables, like let and const.
- For functions, we can also use default parameters and arrow functions.
- ES6 also contains classes, template strings, and new ways for dealing with arrays and objects

- For the most part, if I write some ES6 code and try to run it immediately in a browser, it's not going to work in all browsers
http://kangax.github.io/compat-table/es6/
- This means is that out ES6 code needs to be transpiled in to ES5 before we try to render it in a browser.

- Transpiling is the process of taking ES6 code that we've written and converting it into ES5, so it can be read by browsers.
- We also use transpiling for languages like CoffeeScript and TypeScript.
- There are many different transpiling tools available.
- The most popular is Babel,
- But we also have Traceur, Closure, and many others.

- With Babel we but ES6 code in and get ES5 code out.
- Babel was created by Sebastian McKenzie an Australian developer who now works at Facebook.

***************************************************************************************************************************************************************
                                                             BABEL TRANSPILING
***************************************************************************************************************************************************************             -- SET UP
- Install Babel with NPM.
- Then use babel-node
$npm install babel
$babel script.js -out-file bundle.js        (this is where the ES6 code will be saved)

- Turn on watch to register changes!
$babel script.js --watch --out-file bundle.js

-- Useful Commands
 $node node-script.js
 $babel-node node-script.js

***************************************************************************************************************************************************************
                                                                    WEBPACK
***************************************************************************************************************************************************************
- The package.json file is our module documentation,
-- Installs
$npm install webpack --save-dev
$npm install babel-loader --save-dev
$npm install babel-core --save-dev
$npm install babel-preset-stage-0 --save-dev
$npm install babel-preset-latest --save-dev

-- Create a webpack.config.js
Once you done:
$webpack
$webpack -w

***************************************************************************************************************************************************************
                                                                    LET
***************************************************************************************************************************************************************
- We have a new keyword, let, that we can use to declare variables.
- We use the let keyword to create BLOCK SCOPING in JavaScript in locations where we weren't able to do so before.
- Let helps us deal with some real world problems that arise from block scoping.


***************************************************************************************************************************************************************
                                                                    CONST
***************************************************************************************************************************************************************
- Much like the let keyword, we can use const as an alternative when declaring variables.
- The const keyword is short for constant and allows us to set constant variables that should NOT be reassigned.


***************************************************************************************************************************************************************
                                                              TEMPLATE STRINGS
***************************************************************************************************************************************************************
- Template strings allow you to tap into the functionality of template languages to format your JavaScript code with variables.
- No more concatenation hell!
- we don't have to use the plus sign.
- We don't have to deal with extra spaces that live inside of our strings.
- Everything that we put inside of the backticks is going to be recognized.


***************************************************************************************************************************************************************
                                                              SPREAD OPERATOR
***************************************************************************************************************************************************************
- The spread operator can turn the elements of an array into arguments of a function call,
- Or into elements of an array literal.


***************************************************************************************************************************************************************
                                                              Default Parameters
***************************************************************************************************************************************************************
- One of the easiest to implement features of ES6 is using default parameters in your functions.
- Any new values that we pass in will take the place of the defaults.
- Default parameters can be extremely useful when you want to use a default value if another value is not provided.


***************************************************************************************************************************************************************
                                                              Object Literals
***************************************************************************************************************************************************************
- ES6 enhancements give us ways of shortening and simplifying object literals.
- Repeat is a new ES6 method, and it's going to construct and return a new string. The number of times it's repeated is defined by the value that's passed to it.


***************************************************************************************************************************************************************
                                                              Arrow Functions EXPRESSIONS
***************************************************************************************************************************************************************
- Arrow functions, sometimes called fat arrow functions, have an abbreviated syntax for working with functions.
- Don't confuse => with comparison operators, because it does something quite different.
- Arrow Functions provides us with some syntactic sugar so we can shorten the syntax.
- Arrow functions are a great way to make your JavaScript code more readable and more compact.
- You'll also see them used a lot with functions like map and filter.


***************************************************************************************************************************************************************
                                                              Arrow Functions & the 'this' scope
***************************************************************************************************************************************************************
- In addition, arrow functions can help to deal with the scope of the 'this' keyword in JavaScript code.


***************************************************************************************************************************************************************
                                                              Destructuring
***************************************************************************************************************************************************************
- Destructuring Assignment gives us an easy way to extract data from arrays and objects and assign them to variables.


***************************************************************************************************************************************************************
                                                              Generators
***************************************************************************************************************************************************************
- Generators are a new type of function that allow us to pause functions in the middle of execution, to be resumed later.
- You know you're looking at a generator when you see an asterisk immediately following the function keyword
- Sometimes you'll see people use the asterisk right before the function name.
- We hit pause within a function by using the new 'yield' keyword. And this can be used multiple times within the same function.
- Now to use a generator in our code in the browser, we need to grab one more link from the cdnjs site. Polyfill
- Remember, each time we use a yield statement, we need to restart the function
- Generators more often than not, are used when we're dealing with some sort asynchronous event.
- Like an external event or maybe a timer for instance.
- Generators make it much easier to create asynchronous functions, and the benefits are really quick to observe.


***************************************************************************************************************************************************************
                                                              ES6 Classes
***************************************************************************************************************************************************************
- Classes have long been used in object-oriented programming languages to encourage re-usability.
- In ES6, we now have a way to create and use classes with JavaScript.


***************************************************************************************************************************************************************
                                                              Class Inheritance
***************************************************************************************************************************************************************
- The idea of class inheritance is pretty simple.
- We create one super class and then we can extend this class for reuse in different ways.
- Developers who have come to JavaScript from Python or Java are usually pretty excited to hear this because it's so similar to the class syntax of those languages.


***************************************************************************************************************************************************************
                                                              REACT
***************************************************************************************************************************************************************
- React.js is an increasingly popular JavaScript library that helps you build user interfaces.
- React has exploded in popularity lately due to its relatively small learning curve and the fact that the performance benefits of using React are pretty great.
- React is very ES6 friendly and has adopted the new class syntax for working with ES6. 

````