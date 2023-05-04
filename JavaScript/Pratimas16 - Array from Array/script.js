
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

// Su ciklo pagalba parasyti funkcija, kuri per parametra paima masyva ir 
// grazina nauja masyva su naujais objektais kurie tures name ir year.

function createArray(myArray) {

  let newArray = []; // sukuriamas naujas array, i kuri bus galima ipushinti naujus elementus

  for(let i = 0; i < myArray.length; i++) { // prasukamas ciklas iki kol i nebus didesnis nei array objektu kiekis

    const f_name = myArray[i].name; // sukuria nauja kintamaji, kuris paima objekto kiekviena .name
   
    const f_birthday = myArray[i].birthday.toString(); //sukuria nauja kintamaji, kuris paima objekto kiekviena .birthday ir pavercia i string
   
    const array_birthday = f_birthday.split(' '); // paversta string splitina per tarpus

    const f_year = array_birthday[3]; // issplitinto string paima 4 dali (galima is string imti dalis su Array[])

    const newObject = {name: f_name, year: f_year}; // sukuria nauja objekta su name ir year, i kuriuos ideda musu sukurtus kintamuosius

    newArray.push(newObject);  // sukurta newObject ipushina i funkcijoje sukurta newArray array'u
  }

  return newArray

}

const Array_ = createArray(morePersons)
console.log(Array_)

// -----------------------------------------------------------------------------------------------------------------------------------------------

function createArray(array) {
  const newPersons = []; // sukuriamas naujas array, i kuri bus galima ipushinti naujus elementus

  for(let i = 0; i < array.length; i++){  // prasukamas ciklas iki kol i nebus didesnis nei array objektu kiekis

    const element = array[i]; // pasiima objekta konteineryje

    const newObject = {}; // sukuria nauja objekta konteineryje

    newObject.name = element.name; // naujame objekte sukuria "name" kintamaji ir ideda is paimto objekto.name
    
    newObject.year = element.birthday.getFullYear(); //naujame objekte sukuria "year" kintamaji ir ideda is paimto objekto.birthday (getFullYear yra datos metodas, kuris paima tik metus)

    newPersons.push(newObject) // i nauja newPersons konteineri ipushin'a nauja objekta su newObject.name ir newObject.year.
  }

  return newPersons // grazina nauja konteineri uzpildyta su naujais kintamaisiais
  
}

