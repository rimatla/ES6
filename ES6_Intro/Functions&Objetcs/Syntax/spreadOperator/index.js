//- The spread operator can turn the elements of an array into arguments of a function call, 0r into elements of an array literal.
let cats = ['zilu', 'luna', 'bluto'];
let dogs = ['dara', 'peri', 'rex'];

//using the spread operator: add the above to this array bellow
let animals = ['Lion', 'Horse', ...cats, 'Tiger', ...dogs, 'Butterfly'];

console.log(animals);
