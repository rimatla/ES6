//use a 'for of loop' to iterate through a tree data structure

//node class with a series of comments referencing an array of 'child comments'
class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    //write generator
    *[Symbol.iterator]() {
        //yield current comment
        yield this.content;
        //yield each child of:
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', []),
];

//create a parent root node to house the three children above
const tree = new Comment('Great Post!', children);
//console.log(tree);

//collect of the values form node tree
const values = [];
for (let value of tree) {
    values.push(value);
}

//node tree content
console.log(values);
//node tree length
console.log(values.length);