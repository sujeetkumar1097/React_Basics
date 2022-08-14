// arrow functions
var cube = (x) => {
    return x*x*x;
}
var square = (x) => x*x ;

console.log(square(3));
console.log(cube(3));

// argument object - no longer bound with arrow function
const add = (a, b) => {
    //console.log(arguments)
    return a+b;
}

// this Keyword- no longer bound with arrow function
// if we assign normal function to an object property then that function has access to this keyword
//but for normal function not assign to an object property don't have access to this keyword, so 
//for workaround use (var that = this) inside the function assigned to object property for eg.:
const user = {
    name : 'Sujeet',
    cities: ['Kolkata', 'New York', 'USA'],
    getCities: function () {
        console.log(this.cities); //here this keyword is available
        // this.cities.forEach(function(city) {
        //     console.log(this.name + " lived in " + city) //no this keyword is available (use workaround or arrow function)
        // });

        // var that = this; // workaround, re-binding this keyword
        // this.cities.forEach(function(city) {
        //     console.log(that.name + " lived in " + city) 
        // });

        // use arrow function instead, so that you don't have to bother about this keyword
        this.cities.forEach((city) => {
            console.log(name + " lived in " + city) 
        });
    },
    //if you convert getCities property function to arrow function then it will not work as this keyword
    //is no longer available in arrow function so either use as it is used above or can use es6 function 
    //syntax as shown below.
    getAllCities(){      // remove (: function) from above
        this.cities.forEach((city) => {
            console.log(name + " lived in " + city) 
        });
    }
}

user.getCities();
user.getAllCities();
