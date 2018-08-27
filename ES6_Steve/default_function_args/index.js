// //ES5 ajax request
function makeAjaxRequest(url, method) {
    //default to GET
    if (!method) {
        method = 'GET';
    }
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');

//ES6 default parameters
function makeAjaxRequest(url, method = 'GET') {
    return method;
}

console.log(makeAjaxRequest('google.com')); //->get
console.log(makeAjaxRequest('google.com', 'POST')); //->post
console.log(makeAjaxRequest('google.com', undefined)); //->get
console.log(makeAjaxRequest('google.com', null)); //->make it null


/****************************************************************************/
//function that creates a user object
function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 99999999;
}

//promote user to admin
function createAdminUser(user) {
    user.admin = true;
    return user;
}
console.log(createAdminUser(new User(generateId()))); //->User { id: 89971579.22612323, admin: true }

//ES6 refactor
//promote user to admin
function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}
console.log('default parameter:',createAdminUser());

//take existing user and turning into an admin
const user = new User(generateId());
console.log('existing user', createAdminUser(user));