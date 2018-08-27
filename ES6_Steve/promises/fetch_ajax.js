//fetch is native JS to make AJAX requests without a third party library
let url = 'https://jsonplaceholder.typicode.com/posts/';

/*
fetch(url)
.then(res => res.json())
.then(data => console.log(data)); //we need an actual method to get access to the data
 */

fetch(url)
    .then(res => console.log('Good Boy', res))
    .catch(err => console.log('BAD Boy', err));

/*
fetch only enters the catch case if the request COMPLETELY tanks!
ie:  'https://jsonplace359397holder.typicode.com/posts1234/';

If your server returns a status above 300 and it does not enter the  'catch case'
ie:  'https://jsonplaceholder.typicode.com/posts1234/';

which is completely dissimilar to every other ajax libraries out there.
 */

