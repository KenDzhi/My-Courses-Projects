// --------------------- 1 uzduotis --------------------------------

// function alert(text) {
//     alert(text)
//   }
  
//   function consolelog(text) {
//     console.log(text)
//   }
  
//   function coreFunction(name, callback) {
//     const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     callback(capitalizedName)
//   }
  
//   coreFunction("mantaS", consolelog)

// //   ---------------------------1,2 uzduotis---------------------------------

const cars = ["BMW", "VW", "Audi"]
cars.forEach((value) => console.log(value));
cars.forEach((value, index) => console.log(index +": " + value));

// -------------------------------3 uzduotis--------------------------------------
const friends = ["ArnaS", "ModeSTaS", "KaroLis", "DanieLIUS"];

const capitalFriends = friends.map(capNamesFunction)
console.log(capitalFriends)

function capNamesFunction(array){

    const newNames = array.charAt(0).toUpperCase() + array.slice(1).toLowerCase();
    return newNames
}
// ---------------------------------4 uzduotis------------------------------------

const ages = [15, 12, 28, 40, 21, 18];

const legalAge = ages.filter(checkIfLegal)
console.log(legalAge);

function checkIfLegal (age) {
    return age >= 18;
}

// -----------------------------------5 uzduotis---------------------------------

const cityNames = ["Vilnius", "Kaunas", "Anykščiai", "utena", "Klaipėda", "Kėdainiai"]

const cityStartsWithK = cityNames.find(findCityStartingWithK);
console.log(cityStartsWithK)

function findCityStartingWithK(array) {
    return cityWithK = array.charAt(0) === "K";
}

// -----------------------------------6 uzduotis---------------------------------

const cityStartsWithLowerCase = cityNames.some(findCityStartingWithLowerCase);
console.log(cityStartsWithLowerCase)

function findCityStartingWithLowerCase(array) {
    return array.charAt(0) === array.charAt(0).toLowerCase();
}

// -------------------------------------7 uzduotis-------------------------------

const cityStartsWithUpperCase = cityNames.every(findCityStartingWithUppercase);
console.log(cityStartsWithUpperCase)

function findCityStartingWithUppercase(array) {
    return array.charAt(0) === array.charAt(0).toUpperCase();
}
// -------------------------------Uzduoties perdarymas----------------------------



const persons = [
    {
      name: "John",
      lastname: "Doe",
      id: 1001,
      birthday: new Date("1990-01-15")
    },
    {
      name: "Jane",
      lastname: "Smith",
      id: 1002,
      birthday: new Date("1985-06-30")
    },
    {
      name: "Alice",
      lastname: "Johnson",
      id: 1003,
      birthday: new Date("1992-11-21")
    },
    {
      name: "Bob",
      lastname: "Brown",
      id: 1004,
      birthday: new Date("1978-03-12")
    },
    {
      name: "Charlie",
      lastname: "Davis",
      id: 1005,
      birthday: new Date("2000-08-24")
    }
  ];
  
  const morePersons = [
    {
      name: "Emily",
      lastname: "Taylor",
      id: 1006,
      birthday: new Date("1987-04-10")
    },
    {
      name: "Oliver",
      lastname: "Lee",
      id: 1007,
      birthday: new Date("1994-09-17")
    },
    {
      name: "Sophia",
      lastname: "Gonzalez",
      id: 1008,
      birthday: new Date("1999-12-06")
    },
    {
      name: "Lucas",
      lastname: "Lopez",
      id: 1009,
      birthday: new Date("1976-05-22")
    },
    {
      name: "Zoe",
      lastname: "Morris",
      id: 1010,
      birthday: new Date("2001-07-14")
    }
  ];


 
function arrayToCreate(object) {

    return object.map(elementsToCreate);
    
}

function elementsToCreate(object) {

    return {name: object.name, year: object.birthday.getFullYear()}

}

console.log(arrayToCreate(persons))
console.log(arrayToCreate(morePersons))