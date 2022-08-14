"use strict";

console.log("App.js Is Running");

//JSX Code

var exp = "This Curly braces is called JavaScript Expression";
var object = { name: 'Sujeet', age: 26, loc: 'Bangalore' };
function getLocation(loc) {
    if (loc) return React.createElement(
        "p1",
        null,
        "Location : ",
        loc
    );
}
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision Apps"
    ),
    React.createElement(
        "h3",
        null,
        exp
    ),
    React.createElement(
        "p",
        null,
        object.name.toUpperCase() + ' is ' + object.age + ' year old live in ' + object.loc
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h3",
        null,
        object.name ? object.name : 'Anonymous'
    ),
    object.age >= 18 && React.createElement(
        "p",
        null,
        "Age : ",
        object.age
    ),
    getLocation(object.loc)
);

var root = document.getElementById("appRoot");

ReactDOM.render(template2, root);
