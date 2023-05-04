//------------- Kintamieji priklausantys funkcijai----------
function pasisveikinimas(name, age){
    console.log('Hello, ' + name, 'Your age is ' + age)
}
pasisveikinimas('Mantas', '26')


// -------------------- Globalus kintamieji ----------------

let name = "John";
let age = 35;

// ---------------------- Object konteineris ---------------
const person = {
    name: "Steve",
    age: 40,
    lastName: "Johnson",
    country: "US",
    isMarried: true,
    address: {
        city: "Boston",
        street: "St. John's"
    },
    sayhello: function() {
        console.log("Hello, my name is " + this.name + " " + this.lastName);
    },
}

console.log(person.sayhello());

// --------------------------- Array ---------------------

const personsNamesArray = ["John", "Stevenson", "Sandrute", "Petras"]
console.log(personsNamesArray[0], personsNamesArray.length, personsNamesArray[3]);

////----------------- Array .funkcijos-----------------
const ages = [15, 9, 6, 25, 90, 16, 2, 54]
ages.unshift(100)
ages.push(1.5)
ages.shift()
console.log(ages)

//-------- For loop gali perreiti per visus array elementus------------
for(let i = 0; i < ages.length; i++) {
    console.log(ages[i])
}
// -----------------------------------------------------------------

