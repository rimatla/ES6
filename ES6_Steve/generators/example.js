/**iterate through both teams retrieving all employee names**/

//object representing a testing team
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

//object representing an engineering team
const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    //testingTeam: testingTeam
};

//use generators to figure out how to iterate object above (Only through the employees's data part of it)
function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    //combine multiple generators together = generation delegation
    const testingTeamGenerator = testingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator; //run all yields inside of testingTeamIterator as well
}

//create a separate generator to handle specifically the testing team
function* testingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of teamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names); //-> Jill, Alex, Dave, Amanda, Bill

//PS: comment out code above
/*****************************************************************/
                //Refactor w/ Symbol Iterator
/*****************************************************************/
//Symbol iterator is a tool that teaches objects how to respond to the
//'for of loop'
//object representing a testing team
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead; //Amanda
        yield this.tester; //Bill
    }
};

//object representing an engineering team
const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
   [Symbol.iterator] : function* () {
       yield this.lead;
       yield this.manager;
       yield this.engineer;
       yield * this.testingTeam //find that object and figure how iterate on that object
   }
};

const names = [];
for (let name of engineeringTeam) {
    names.push(name);
}
console.log('refactor:', names); //-> Jill, Alex, Dave, Amanda, Bill