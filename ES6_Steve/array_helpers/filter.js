//array of objects
let products = [
    {name: 'orange', type: 'fruit', quantity: 0, price: 1},
    {name: 'cucumber', type: 'vegetable', quantity: 10, price: 15},
    {name: 'apple', type: 'fruit', quantity: 30, price: 13},
    {name: 'celery', type: 'vegetable', quantity: 3, price: 5},
];

//get products with type fruit: for loop
var filteredProds = [];
for (var i = 0; i < products.length; i++){
    if (products[i].type === 'fruit') {
        filteredProds.push(products[i]);
    }
}
console.log(filteredProds);

/*************************************************************/
//filter
let fruits = products.filter(product => product.type === 'fruit');
console.log(fruits);

/*************************************************************/
//filter only types that equal vegetables and quantity > 0 and price < 10
let filteredItem = products.filter(product => product.type === 'vegetable' && product.quantity > 0 && product.price < 10);
//console.log(filteredItem);


/*************************************************************/
let post = { id: 4, title: 'New Post'};
let comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'ok post'},
    {postId: 4, content: 'cool post'},
];

//takes a new post and its (multiple) comments
let commentsForPost = (post, comments) => {
    //return just the comments associated w/ a particular post
    return comments.filter(comment => comment.postId === post.id);
};

console.log(commentsForPost(post, comments));


/*************************************************************/
//filter/create a new array that only contains numbers greater than 50
let numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
let filteredNumbers = numbers.filter( number => number > 50);
console.log(filteredNumbers);


/*************************************************************/
//Filter the array of users, only returning users who have admin level access.
//Assign the result to the variable 'filteredUsers'.
let users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

let filteredUsers = users.filter(user => user.admin === true);
console.log(filteredUsers);


/*************************************************************/
//if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.
let moreNumbers = [10, 14, 20, 30];
//Create a function called 'reject'.
let reject = (array, iteratorFunction) => {
    //Reject should work in the opposite way of 'filter'
    return array.filter(item  => !iteratorFunction(item));
};

let lessThanFifteen = reject(moreNumbers, number => number > 15); //array, iteratorFunction

console.log(lessThanFifteen);