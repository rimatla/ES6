function validateShoppingList(...items) { //rest
    //make sure to always get milk
    if (items.indexOf('milk') < 0 ) { //if milk isn't on shopping list
        return ['milk', ...items]; //spread
    }
    //else
    return items;

}

console.log(validateShoppingList('oranges', 'bread', 'eggs', 'ham'));

/*******************************************************************/
//Refactor the following, to use only the rest operator
function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
}

function _unshift(array, ...letters) { //rest
    return [...letters, ...array]; //spread
}

console.log('unshift',_unshift([1,2,3,],'a', 'b', 'c'));