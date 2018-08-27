//ES5
//object that represent an expense
var expense = {
    type: 'Business',
    amount: '$45 USD'
};
var type = expense.type;
var amount = expense.amount;

/*********************************************************************/
                      //Destructuring Variables
/*********************************************************************/
//ES6
//reference expense.type
const {type} = expense;
//reference expense.amount
const {amount} = expense;
//further
const {type, amount} = expense;

/*********************************************************************/
                    //Destructuring Object Properties
/*********************************************************************/
//pull properties off of objects that are passed to functions
//ES5
//file sitting on our desktop
var savedFile = {
    extension: 'jpg',
    name: 'report',
    size: 14040
};

//print summary of file
function fileSummary(file) {
    console.log('ES5', file.name);
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
console.log(fileSummary(savedFile));

//ES6
//print summary of file
function file_summary({name, extension, size}) {
    console.log('ES6', name);
    return `The file ${name}.${extension} is of size ${size}`;
}
console.log(file_summary(savedFile));
/*********************************************************************/
                           //Destructuring Arrays
/*********************************************************************/
//tech companies
const tech_companies = ['Google', 'Facebook', 'Uber'];

//pull off individual elements;
const [name, ...rest] = tech_companies;
console.log(name); //-> Google. outputs the 1st element
console.log(rest);

/*********************************************************************/
                //Destructuring Arrays & Objects
/*********************************************************************/
const companies = [
    {name: 'Google', location: 'Mountain View'},
    {name: 'Facebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Francisco'},
];

//ES5 find Google's location
var location_google = companies[0].location;
console.log(location_google);

//ES6 times 2, What???
const [,,{location}] = companies;
console.log(location); //-> San Francisco

//Multiple locations
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const {locations: [MT,,UK]} = Google;
console.log(MT, UK); //-> Mountain View, London
