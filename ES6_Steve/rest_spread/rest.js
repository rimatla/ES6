function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    },0)
}
//console.log(addNumbers([1,2,3,4,5]));

//what if we'd like to pass it no as an array?
function add_numbers(a,b,c,d,e) {
    //massage into an array
    const numbers = [a,b,c,d,e];
    return numbers.reduce((sum, number) => {
        return sum + number;
    },0)
}
//console.log(add_numbers(1,2,3,4,5));

//ES6
//
function adding_numbers(...numbers) { //allows us to represent an indefinite number of arguments as an array.
    //massage into an array
    //const numbers = [a,b,c,d,e];
    return numbers.reduce((sum, number) => {
        return sum + number;
    },0)
}
//console.log('rest:',adding_numbers(1,2,3,4,5,7,8,9));

/*******************************************************************/
//Library for fancy math calculations
const MathLibrary = {
    //multiply two numbers together
    calculateProduct(a, b) {
        return a * b;
    },
    /*
    - What if I decided or am asked to change the method name later down the road
    merely changing the method name would brake a lot of code used with a previous version of your 'library';
     */
    //redundancy
    multiply(a,b) {
        return a * b;
    }

};

//Library for fancy math calculations
const MathLibrary = {
    //multiply two numbers together
    calculateProduct(...rest) { //accept multiple arguments
        console.log('please use multiply method instead');
        //remove duplicates/ redundancy
        return this.multiply(...rest)
    },
    multiply(a,b) {
        return a * b;
    }

};