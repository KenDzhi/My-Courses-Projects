// // ------------- Reduce ----------------------------

// const arr = [1, 60, -100, 2000, 5, 10150, -666, 5555];

// const initialReduceValue = { min: undefined, max: undefined } // sukuriam pradine reiksme su dviem parametrais nepriskiriant reiksmes

// function callbackFn(previousValue, currentArrayElement) {

//   if (
//     previousValue.max === undefined ||
//     currentArrayElement > previousValue.max
//   ) {
//     previousValue.max = currentArrayElement
//   }

//   if (
//     previousValue.min === undefined ||
//     currentArrayElement < previousValue.min
//   ) {
//     previousValue.min = currentArrayElement
//   }

//   return previousValue
// }

// const finalResult = arr.reduce(callbackFn, initialReduceValue);

// console.log(finalResult)

// ----------------------------------------------------------

// const personsObj = [
//     {
//         name: 'Annie',
//         age: 35
//     },
//     {
//         name: 'John',
//         age: 35
//     },
//     {
//         name: 'Steeve',
//         age: 19
//     },
//     {
//         name: 'Leenie',
//         age: 20
//     },
// ]

// console.log(
//     personsObj.reduce((acc, curr) => {

//         if(!acc[curr.age] ) {
//             acc[curr.age] = []
//         }

//         acc[curr.age].push(curr)

//         return acc

//     }, {})
// )

// -----------------------------------------------------------------------------------------------
const persons = [
  { name: "John", lastname: "Doe", id: 1001, birthday: new Date("1990-01-15") },
  {
    name: "Jane",
    lastname: "Smith",
    id: 1002,
    birthday: new Date("1985-06-30"),
  },
  {
    name: "Alice",
    lastname: "Johnson",
    id: 1003,
    birthday: new Date("1992-11-21"),
  },
  {
    name: "Bob",
    lastname: "Brown",
    id: 1004,
    birthday: new Date("1978-03-12"),
  },
  {
    name: "Charlie",
    lastname: "Davis",
    id: 1005,
    birthday: new Date("2000-08-24"),
  },
];

const morePersons = [
  {
    name: "Emily",
    lastname: "Taylor",
    id: 1006,
    birthday: new Date("1987-04-10"),
  },
  {
    name: "Oliver",
    lastname: "Lee",
    id: 1007,
    birthday: new Date("1994-09-17"),
  },
  {
    name: "Sophia",
    lastname: "Gonzalez",
    id: 1008,
    birthday: new Date("1999-12-06"),
  },
  {
    name: "Lucas",
    lastname: "Lopez",
    id: 1009,
    birthday: new Date("1976-05-22"),
  },
  {
    name: "Zoe",
    lastname: "Morris",
    id: 1010,
    birthday: new Date("2001-07-14"),
  },
];

const mergedPersons = persons.concat(morePersons);
// console.log(mergedPersons)
// sukuriamas naujas objektas supushinant morePersons i persons objekta.

const initialReduceValue = {};
//sukuriamas tuscias objektas, kuris bus naudojamas naujiems elementams ipushinti.

const finalResult = mergedPersons.reduce(callbackFn, initialReduceValue);
//.reduce(iskvieciamas funkcija, priskiriama (tuscio array) reiksme)

function callbackFn(previousValue, currentArrayElement) {
  if (!previousValue[currentArrayElement.name.charAt(0)]) {
    //tikrinama ar elemento .charAt(0) value NEEGZITUOJA sukurtame pradiniame mergedPersons objekte.
    previousValue[currentArrayElement.name.charAt(0)] = [];
    //neegzistuoja(true)-sukuriamas naujas array su ieskotu .charAt(0) kaip objekto pavadinimu kiekviename cikle
  }

  if (!previousValue[currentArrayElement.lastname.charAt(0)]) {
    //tikrinama ar dabartinio elemento .charAt(0) value NEEGZITUOJA
    previousValue[currentArrayElement.lastname.charAt(0)] = [];
    //neegzistuoja(true)-sukuriamas naujas array su ieskotu .charAt(0) kaip objekto pavadinimu kiekviename cikle
  }

  if (
    !previousValue[currentArrayElement.name.charAt(0)].find(
      (mergedPersons) => mergedPersons.id === currentArrayElement.id
      //.find funkcija tikrina ar mergedPersons objekte esnati ID value lygi dabartiniame object esanti ID reiksme.
      // Jei ji nera lygi(ji neegzistuoja, vykdomas veiksmas)
    )
  ) {
    previousValue[currentArrayElement.name.charAt(0)].push(currentArrayElement);
    //ipushinamas dabartinio ciklo elementas i ankstesnes reikmes objekta prie einamo ciklo tikrinamos .charAt(0)
  }

  if (
    !previousValue[currentArrayElement.lastname.charAt(0)].find(
      (mergedPersons) => mergedPersons.id === currentArrayElement.id
      //.find funkcija tikrina ar mergedPersons objekte esnati ID value lygi dabartiniame object esanti ID reiksme.
      // Jei ji nera lygi(ji neegzistuoja, vykdomas veiksmas)
    )
  ) {
    previousValue[currentArrayElement.lastname.charAt(0)].push(
      currentArrayElement
    );
    //ipushinamas dabartinio ciklo elementas i ankstesnes reikmes objekta prie einamo ciklo tikrinamos .charAt(0)
  }

  return previousValue;
}

console.log(finalResult);
