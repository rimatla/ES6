/**
 - Run
 $node node-script.js
 $babel-node node-script.js
 */

var EventEmitter = require('events').EventEmitter;

var Person = function(name){
    this.name = name;
};
Person.prototype = new EventEmitter();

// notice the let key word
let Joanne = new Person("Joanne Wilson");

Joanne.on('speak', function(say) {
    console.log("Hey Hello! " + say);
});

Joanne.emit('speak', "how's it goin?");
