// var can be re-define and re-assign
var namevar = 'Sujeet';
var namevar = 'Sanjeet';
console.log(namevar);

// let cannot be re-define but can be re-assign
let nameLet = 'Sujeet';
nameLet = 'Sanjeet';
console.log(nameLet);

// const cannot be re-define and re-assign
const nameConst = 'Sujeet';
console.log(nameConst);

// let, const and var are function scope. (reachable till function body exist)
//var is also function scope so var inside function is also not available to global scope.
function getPetName() {
    var petname = 'Sujeet';
    return petname;
}
getPetName();
//console.log(petname);

//let and const are block scope. (if block, else block, {}, etc)
var fullName = 'Sujeet Kumar';
let lastName;
if(fullName) {
    var firstName = fullName.split(' ')[0];
    lastName = fullName.split(' ')[1];
    console.log(firstName);
}
console.log(firstName);
console.log(lastName);
