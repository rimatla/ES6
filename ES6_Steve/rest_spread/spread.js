//display a pallet of colors
const defaultColors = [ 'red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fired red', 'fall orange'];

//join  all colors.
console.log(defaultColors.concat(userFavoriteColors));

//spread operator = concatenation on steroids
const allColors = ['blue',...fallColors,...defaultColors, ...userFavoriteColors];
console.log('spread:', allColors );

/*******************************************************************/
//Refactor the following to use the spread operator.
function join(array1, array2) {
    return array1.concat(array2);
}

function re_join(...arrays) { //resting arrays
    return arrays.reduce((prev,next)=>{
        //return prev.concat(next)
        return [...prev,...next]; //spreading arrays
    },[]);
}

console.log(re_join([1,2,3],[4,5,6,7]));
