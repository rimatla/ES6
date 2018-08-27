//does any record match the condition
//SOME
let computers = [
    {name: 'Apple', ram: 24},
    {name: 'PC', ram: 4},
    {name: 'Acer', ram: 32},
];

let atLeast16Gigs = computers.some(computer => computer.ram > 16);
console.log(atLeast16Gigs); //-> true


/************************************************************************/
let names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

//at least some?
let result = names.some(name => name.length > 4);
console.log(result); //-> true

/************************************************************************/
//Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress'
//if any network request has a 'status' of 'pending'.
let requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

let inProgress = requests.some(req => req.status === 'pending');
console.log(`in progress: ${inProgress}`);