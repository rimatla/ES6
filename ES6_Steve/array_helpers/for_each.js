/*
avoid nested for loops, use array helpers
 */
var colors = ['red', 'blue', 'green'];
for (var i = 0; i < colors.length; i ++) {
    console.log(colors[i]);
}
//for each
colors.forEach(color => console.log(`for_each output: ${color}`));


/*******************************************************************************************************************/
//array of numbers
let numbers = [1,2,3,4,5,];
//create variable to hold the sum
let sum = 0;
//loop array and increment sum variable
numbers.forEach(number => sum += number);
//print sum variable
console.log(sum);
//adder method
let adder = number => sum += number;
//for each
numbers.forEach(adder);
console.log(sum);


/*******************************************************************************************************************/

//Rather than using a for loop, refactor the code below to instead use the forEach helper.
function handlePosts() {
    let posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];

    /*
    for (var i = 0; i < posts.length; i++) {
        console.log(posts[i]);
        //figurative method call
        //savePost(posts[i]);
    }
    */

    //for each
    posts.forEach(post => {
        console.log(post)
        //figurative method call
        //savePost(posts[i]);
    });
}
handlePosts();
/*******************************************************************************************************************/

//calculate the area of each image and store it in a new array called 'areas'.
let images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
let areas = [];

//push() adds one or more elements to the end of areas array and returns the new length areas.
images.forEach(image => areas.push(image.height * image.width));
console.log(areas);

