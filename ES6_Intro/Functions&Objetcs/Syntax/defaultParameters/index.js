//create a function that adds two numbers together
function add(x=5,y=3){
    console.log(x+y);
}

add(); //without a default parameter this would print NaN

//now try as a string value
function haveFun(activityName='play soccer', time=3){
    console.log(`Today I'll go ${activityName} for ${time} hours.`);
}

/**haveFun(); //without a default parameter this would print undefined*/

//Any new values that we pass in will take the place of the defaults
haveFun('play Tennis', 4);