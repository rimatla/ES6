/*****************************************************************************************************************************************
                                                                    THE OLD WAY
 *****************************************************************************************************************************************/
//create an object which contains several methods
let cat = {
    //number of times
  meow: function (times){
      //join is going to take  the elements of the array and join them together as a string
      //+1 since JS in 0 indexed
      console.log(new Array(times+1).join('meow')); //pass in parameters to the 'Array constructor' and the 'join method'
  },
  purr: function (times){
      console.log(new Array(times+1).join('purr'));
  },
  snore: function (times){
      console.log(new Array(times+1).join('snore'));
  }
};

//number of times
cat.meow(3);
cat.purr(4);
cat.snore(5);


/*****************************************************************************************************************************************
                                                                    ES6
 *****************************************************************************************************************************************/
//refactoring the above code to a much  simpler type of object notation that is becoming the standard in ES6.
let dog = {
    //remove the function keyword as well as the colon
    bark(times){
        console.log('bark'.repeat(times)); //chain it to repeat() aka: a new ES6 method
    },
    bite(times){
        console.log('bite'.repeat(times));
    },
    snore(times){
        console.log('snore'.repeat(times));
    }
};

//number of times
dog.bark(3);
dog.bite(4);
dog.snore(5);

/**
 * -Repeat is a new ES6 method, and it's going to construct and return a new string.
 * -The number of times it's repeated is defined by the value that's passed to it. So in this case, We used my variable name, times.
**/