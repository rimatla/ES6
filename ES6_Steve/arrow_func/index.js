const team = {
    members : ['Jane', 'Bill'],
    teamName: 'Super Team',
    teamSummary: function () {
        //var self = this; //ES5 fix 2nd solution option
        return this.members.map(function(member) {
            //whenever pass a anonymous function, the value of this is lost inside of that function
            return `${member} is on team ${this.teamName}`; //this is undefined
        }.bind(this)); //ES5 solution
    }
};

//console.log(team.teamSummary()); //-> undefined

//ES6
const team_arrow = {
    members_arrow : ['Jane', 'Bill'],
    teamName_arrow: 'Super Fat Arrow',
    teamSummary: function () {
        return this.members_arrow.map(member => {
            //Fat => function makes use of lexical this,
            //re-assigning this in accordance to where (scope) is applied and requested
            return `${member} is on the best arrow team ${this.teamName_arrow}`;
        });
    }
};

console.log(team_arrow.teamSummary());