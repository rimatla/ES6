/*****************************************************************************************************************************************
                                                                    THE OLD WAY
 *****************************************************************************************************************************************/
let person = {
    first: 'Vivian',
    actions: ['bike', 'hike', 'ski', 'surf'],
    //print all the things Vivian likes to do
    printActions: function (){
        //reassign this
        let _this = this;
        //look at all the items inside the actions property
        this.actions.forEach(function(action){ //process each action in the array
            let str = _this.first + ' likes to ' + action;
            console.log(str);
        })
    }
};

/**while the this on line 10 refers to the object ie: 'person', this.first, can't access the name ie: 'first' of this person*/

//call function
person.printActions(); //before reassigned, this will print undefined


/*****************************************************************************************************************************************
                                                                    BINDING WAY
 *****************************************************************************************************************************************/
let boy = {
    first: 'Seth',
    actions: ['swim', 'play', 'run', 'jump'],
    //print all the things Vivian likes to do
    printActions: function (){
        //look at all the items inside the actions property
        this.actions.forEach(function(action){ //process each action in the array
            let str = this.first + ' likes to ' + action;
            console.log(str);
            //bind this
        }.bind(this))
    }
};

/**while the this on line 10 refers to the object ie: 'person', this.first, can't access the name ie: 'first' of this person*/

//call function
boy.printActions(); //before bound, this will print undefined

/*****************************************************************************************************************************************
                                                                ES6 - Arrow Functions EXPRESSIONS
 *****************************************************************************************************************************************/
let player = {
    first: 'Messi',
    actions: ['Play Soccer', 'Destroy Teams', 'Breaks All Soccer Records', 'Be the Best Player of the Planet'],
    //remove our function key word and colon
    printActions(){
        //look at all the items inside the actions property
        this.actions.forEach(action => { //remove parenthesis when there's only one argument
            let str = `${this.first} likes to ${action}.`;
            console.log(str);
        })
    }
};

//call function
player.printActions();


/**
 PS:
 When there are multiple lines in a function. KEEP the curly braces intact.
 */
let func = function (quantity=1, drink='beer'){
    console.log(quantity);
    console.log(drink);
};

let funct = (quantity=2, drink='juices') => {
    console.log(quantity);
    console.log(drink);
};

func();
funct();