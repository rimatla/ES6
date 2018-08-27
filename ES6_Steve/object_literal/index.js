// //ES5 object declarations
function createBookShop(inventory) {
    return {
        //key: value
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => {
                return total + book.price;
            }, 0);
        },
        priceForTitle: function (title) {
            return this.inventory.find(book => book.title === title).price
        }
    }
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Mocking Jay', price: 15},
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

/**********************************************************************/
//ES6 enhanced object literals in a more compact fashion
function createBookShop(inventory) {
    return {
        //key: value are identical
        inventory,
        //when there's a key/value pair, where the value is a function
        inventoryValue() {
            return this.inventory.reduce((total, book) => {
                return total + book.price;
            }, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price
        }
    }
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Mocking Jay', price: 15},
];

const bookShop = createBookShop(inventory);
console.log('ES6:', bookShop.inventoryValue());
console.log('ES6:', bookShop.priceForTitle('Harry Potter'));

/********************************************************************/
//Take some amount of data and make a POST request
function saveFile(url, data) {
    //$.ajax({ method: 'POST', url: url, data: data });
    $.ajax({ url, data, method: 'POST' }); //move to left side for convention sake
}
const url = 'http://fileupload.com';
const data = { color: 'red'};
saveFile(url, data);

/********************************************************************/
