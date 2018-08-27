//Previous vs New syntax
function print(firstName){
    /**console.log('Hello ' + firstName)*/
    console.log(`Hello ${firstName}`)
}
print('Joaquim!');

//Second Example
function createEmail(firstName, purchasePrice) {
    let shipping = 5.95;
    //variables and white spaces all respected
    console.log (
        `Hi ${firstName}, Thanks for buying from us!
					Total: $${purchasePrice}
					Shipping: $${shipping}
					Grand Total: $${purchasePrice + shipping};`
    );

    return (
        `
            <p>Hi ${firstName}, Thanks for buying from us!</p> 
            <p>Grand Total: $${purchasePrice + shipping};</p>
            <p>Total: $${purchasePrice} Shipping: $${shipping}</p>
            <p> Shipping: $${shipping}</p>
            <p>Grand Total: $${purchasePrice + shipping}</p>
        `
    );
}

let printResult = createEmail('Gina', 100);

let elem = document.createElement('div');
elem.className = 'container';
elem.innerHTML = printResult ;
document.getElementById('result').appendChild(elem);
console.log(printResult );

//print to DOM
// document.getElementById('result').appendChild(document.createTextNode(result));


