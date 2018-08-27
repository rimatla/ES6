const axios = require('axios');
const usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const imgUrl =  'https://jsonplaceholder.typicode.com/photos/';

const service = {
    getUsers: () => axios({url: usersUrl}),
    getImages: () => axios({url: imgUrl}),
};

//Promises Alone
function promiseEx() {
    let obj = {};

    service.getUsers()
        .then(res => {
            obj.users = res.data;
            console.log(obj);
            return service.getImages();
        })
        .then(res => {
            obj.images = res.data;
            console.log('Images', obj);
        })
        .catch(err => {
            console.log(err);
        })
}
promiseEx();

//async await
const asyncEx = async () => {
    try {
        let users = await service.getUsers();
        let images = await service.getImages();
        console.log('ASYNC EXAMPLE:', {
            users: users.data,
            images: images.data
        });
    }
    catch (err) {
        console.log(err);
    }
};

asyncEx();

//if you don't need any manipulation after each subsequently response, you can use Promise.all()
const promiseAllEx = async () => {
    try {
        const values = await Promise.all([service.getUsers(), service.getImages()]);
        console.log('PROMISE ALL EXAMPLE:', values.map(v => v.data));
    }
    catch (err) {
        console.log(err);
    }
};

promiseAllEx();