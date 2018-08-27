var x = 10;
if(x) {
    var x = 4;
}

console.log(`I'm var X and my value is: ${x}`); //changed to global value of x to 4


/******************************************************************/
let y = 10;

if(y) {
    let y = 5;
    console.log(`I'm var Y in my block scope and my value is: ${y}`); //local value = 5
}
console.log(`I'm var Y and my value is: ${y}`); //global value stays as 10


/******************************************************************/
//Use Case

//up to the the 45th time
/**for( var i= 0; i<45; i++){*/
for( let i= 1; i <= 20; i++){ //switching to let will prevent i from being overwritten

    //create a div
    /**var div = document.createElement('div');*/
    let div = document.createElement('div');
    //add a click handler
    div.onclick = function() {
        alert("you clicked on a box #" + i); //currently it always register i as 45 no matter witch box is clicked

    };

    //target and append within the firsts section
    document.getElementsByTagName('section')[0].appendChild(div);
}

/*
 Let is a great tool for enforcing block scoping in your JavaScript code!
 */