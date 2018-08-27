const birthYear = 1985;
let age = 2017 - birthYear;
console.log(age);

/** birthYear = 1985; //will break, const will help to protect the value of the variable*/
console.log(birthYear);


/************************************************************************/
//example


 function coldEnough(deg) { //argument
    const freezingTemp = 32;

    if (freezingTemp <= deg) {
        return `${deg}° is above freezing.`;
    } else {
        return `${deg}° is bellow freezing.`;
    }
}

console.log(coldEnough(40));
console.log(coldEnough(12));
console.log(coldEnough(-10));