/*****************************************************************************************************************************************
                                                                    THE OLD WAY
 *****************************************************************************************************************************************/
let studentList = function(students){
    console.log(students);
};

studentList(['Jay', 'Jack', 'Jean']);

/*****************************************************************************************************************************************
                                                                ES6 - Arrow Functions EXPRESSIONS
 *****************************************************************************************************************************************/
//Arrow Functions provides us with some syntactic sugar so we can shorten the syntax.

//Remove the function key word and the curly braces
//if we have only ONE PARAMETER, we can even remove the parenthesis
/**let scholarList = (scholars) => console.log(scholars);*/
let scholarList = scholars => console.log(scholars);
scholarList(['Kay', 'Kevin', 'Kyle']);

//case 2
// A function with no parameters could be write with a couple of parentheses or with an underscore:
let funcOne = () => console.log(1);
let funcTwo = _ => console.log(2);

funcOne();
funcTwo();