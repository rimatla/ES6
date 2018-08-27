//One approach for ES5

// //constructor
// function Car(options) {
//     this.title = options.title;
// }
//
// //add a method
// Car.prototype.drive = function () {
//    console.log('vroom');
// };
//
// const car = new Car({title: 'Focus'});
// car.drive();
// console.log(car);
//
// //see function body
// //console.log(Car.toString());
//
// //add a new object
// function Toyota(options) {
//     //have toyota inherit of the properties of car
//     Car.call(this, options);
//     this.color = options.color;
// }
//
// //inherit drive method from Car
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
//
// //add a method
// Toyota.prototype.honk = function() {
//     console.log('beep');
// };
//
// const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
// console.log(toyota);
//
// toyota.drive();
// toyota.honk();

/********************************************************************************************/

/********************************************************************************************/
//ES6 solution for prototypal inheritance
class Car {
    //initialization and set up of instances
    constructor(options) {
        this.title = options.title;
    }
    //add method
    //enhanced object literal syntax
    drive() {
        console.log('drive(): vrooom');
    }
}

//get Toyota to inherit everything from Car
class Toyota extends Car {
    constructor(options) {
        super(options); //call parent constructor ie: Car.constructor()
        this.color = options.color;
    }
    //add method
    honk() {
        console.log('honk(): beep');
    }
}

//get a instance of Toyota
const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
console.log(toyota);
toyota.honk();
toyota.drive();

//get a instance of Car
const car = new Car({title: 'Toyota'});
console.log(car);
car.drive();


/********************************************************************************************/

/********************************************************************************************/
// You are a game developer tasked with setting up some basic classes for a new game you are working on.
// Create a class called 'Monster'.
// In the constructor, you'll need to do some basic setup for Monster whenever they are created.
// Initialize the Monster's health to 100.
// The constructor will be called with an 'options' object that has a 'name' property.
// Assign the 'name' to the Monster
class Monster {
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }
}

//Now that you have a monster created, create a subclass of the Monster called Snake.
//The Snake should have a 'bite' method.
//The only argument to this method is another instance of a Snake.
// The instance of Snake that is passed in should have their health deducted by 10
class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    bite(options) {
        return options.health -= 10;
    }
}