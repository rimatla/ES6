let computers = [
    {name: 'Apple', ram: 24},
    {name: 'PC', ram: 4},
    {name: 'Acer', ram: 32},
];

//find all computers w/ at least 16 gigs
let allComputersCanRunProgram = true; //default
let onlySomeComputersCanRunProgram = false;
for (var i = 0; i < computers.length; i++){
    let computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}
console.log(allComputersCanRunProgram); //-> false
console.log(onlySomeComputersCanRunProgram); //-> true

//EVERY element of the array
//condense array to a single value (true/false)
let atLeast16Gigs = computers.every(computer => computer.ram > 16);
console.log(atLeast16Gigs); //-> false


/************************************************************************/
let names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

//find every name with a length > than 4 characters
let result = names.every(name => name.length > 4);
console.log(result); //-> false


/************************************************************************/
//validate all inputs before submitting a for the server
function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    //field is valid ig length is greater than 0
    return this.value.length > 0;
};

let username = new Field('2cool');
let password = new Field('my_password');
let birthdate = new Field('01-01-2010');

console.log(`user validate: ${username.validate()}`);
// && password.validate() && birthdate.validate() && ${username.validate()

//make sure that every field is valid
let fields = [username, password, birthdate]; //destructuring
let formIsValid = fields.every(field => field.validate());
console.log(formIsValid);

if (formIsValid) {
    //allow user to submit
} else {
    //show an error message
}

/************************************************************************/
//Given an array of users, return 'true' if every user has submitted a request form.
//Assign the result to the variable 'hasSumbmitted'.
let users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

let hasSubmitted = users.every(user => user.hasSubmitted === true);
console.log(`submitted: ${hasSubmitted}`);