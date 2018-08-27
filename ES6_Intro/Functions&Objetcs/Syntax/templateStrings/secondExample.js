const person = {
    name: 'Altamir Coelho',
    job: 'Full Stack Developer',
    city: 'Minneapolis,MN',
    bio: 'Testing Template Literals!'
};

// And then create our markup:
const markup = `
 <div class="person">
    <h2>
        ${person.name}
    </h2>
    <p class="location">${person.city}</p>
    <p class="bio">${person.bio}</p>
 </div>
`;

const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
    { name: 'Sunny', age: 1 }
];

//join will get rid of comas in between
const markup2 = `
<ul class="dogs">
    ${dogs.map(dog =>
    `<li>${dog.name} is ${dog.age * 7} </li>`
).join('')} 
 </ul>
`;


//print first element
let firstElement = document.createElement('div');
firstElement.className = 'firstClass';
firstElement.innerHTML = markup;
document.getElementById('container').appendChild(firstElement);
console.log(markup);

//print second element
let secondElement = document.createElement('div');
secondElement.className = 'secondClass';
secondElement.innerHTML = markup2;
document.getElementById('container').appendChild(secondElement);
console.log(markup2);
