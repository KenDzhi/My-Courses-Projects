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

// // ----Apsirasome .map su nauja funkcija----

// //   function createShortPersonData(person, index, arr) {
// //     console.log(person, index, arr)
// //   }
// //     const personsShortData = persons.map(createShortPersonData)

// // ----------------------------------------------------------------------

// // --- Funckijos apsirasymas vienoje eileje (funkcija nebus panaudojama)

// //   const personsShortData = persons.map(function (person, index, arr) {
// //     console.log(person, index, arr)
// //   })




// // ------------------------------- Arrow funkcijos --------------------

// // -- {} skliausteliai reiskia, kad tai yra funkcijos body
// const personsShortData = (arrItem, itemIndex, arr) => {
//     console.log(arrItem,itemIndex, arr)
// }

// // ---Apskliaudus () jis returnina atsakyma be "return"
// const mapCallBack2 = (arrItem, itemIndex, arr) => ({
//     name: arrItem.name,
//     year: arrItem.birthday.getFullYear(),
//     }
// );

// // --- Arrow funkcija idedama i kintamaji---
// const mapCallBack = (arrItem, indexItem, arr) => {
//     console.log(arrItem,itemIndex, arr)
// };

// // --- JS Destructing--------------------

// const firstPerson = persons[0];

// // const name = firstPerson.name;
// // const lastname = firstPerson.lastname;
// // const id = firstPerson.id;


// // Tas pats kas auksciau, tik vienu kartu sukuria 3 kintamuosius "name", "lastname" "id"
// const {name, lastname, id} = firstPerson;


// // JS Destructuring
// // sukuriam nauja kintama----.map pasiima person.name--- ir grazina tik name array

// const personsShortData3 = persons.map(({name}) => ({name}));
// console.log(personsShortData3)


// ----------------------------------- Uzduotis --------------------------------

function peopleList() {

    for(i = 0; i < persons.length; i++) {

    const person = persons[i];
    let createListElements = document.createElement("li")
    
    let createButton = document.createElement("button")
    createButton.textContent = "Show more details";
    createButton.onclick = () => myFunction(person);
    

    createListElements.textContent = person.name + " " + person.lastname + " ";
    document.querySelector("ul").append(createListElements)
    createListElements.append(createButton)

    }

}

function myFunction(persons){
    console.log(persons)
}

peopleList(persons);

