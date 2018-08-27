let users = [
    {name: 'Jill'},
    {name: 'Ben'},
    {name: 'Sam'},
    {name: 'Alex'}
];
var user;
//for loop
for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Ben') {
        user = users[i];
        //once you've found it stop processing (save memory)
        break;
    }
}
console.log(user);

/************************************************************************/
//find
let alex = users.find(user => user.name === 'Alex');
console.log(alex);

//Find helper resumes once it finds a first true condition, i
//therefore if there were two records fro Alex, only the first one would be returned


/************************************************************************/
//constructor
function Car (model)  {
    this.model = model;
}

//collection of car objects
let cars = [
    new Car('BMW'),
    new Car('Ford'),
    new Car('Chev'),
];

//find ford
console.log(cars.find(car => car.model === 'Ford'));


/************************************************************************/
const posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old Post'},
];

const comment = {postId: 1, content: 'Great Post'};

let postForComment = (posts, comment) => {
    return posts.find(post => post.id === comment.postId);
};

//find a single record inside a greater collection
console.log(postForComment(posts, comment));
//-> { id: 1, title: 'New Post' }


/************************************************************************/
//Find the user in the users's array who IS an admin.
// Assign this user to the variable 'admin'.
let new_users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

let admin = new_users.find(user => user.admin === true);
console.log(admin);



/************************************************************************/
//Find the account with a balance of 12 and assign it to the variable 'account'.
let accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

let account = accounts.find(i => i.balance === 12);
console.log(account);


/************************************************************************/
//Write a 'findWhere' function that returns a found object.
const ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

const findWhere = (array, criteria) =>  array.find(arr =>
    arr[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]]);

let result = findWhere(ladders, {height:20});
console.log(result);