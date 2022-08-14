console.log("App.js Is Running");

//JSX Code

var exp = "This Curly braces is called JavaScript Expression";
var object = {name:'Sujeet', age: 26, loc: 'Bangalore'}
function getLocation(loc) {
    if(loc)
    return <p1>Location : {loc}</p1>
}
var template = (<div>

<h1>Indecision Apps</h1>
<h3>{exp}</h3>
<p>{object.name.toUpperCase() + ' is ' + object.age +' year old live in ' + object.loc}</p>

</div>
);

var template2 = (<div>
    <h3>{object.name ? object.name : 'Anonymous'}</h3>
    {object.age >=18 && <p>Age : {object.age}</p>}
    {getLocation(object.loc)}
    </div>
    );

var root = document.getElementById("appRoot")

ReactDOM.render(template2, root)