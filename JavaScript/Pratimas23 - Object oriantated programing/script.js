// ------- Objektinis programavimas --------------------

// function Person(name, age, lastname) {

//     this.name = name,
//     this.age = age,
//     this.lastname = lastname
// };

// class Person {     //---------Naujas uzrasymas su class
//     constructor(name, age, lastname) {
//         this.name = name,
//         this.age = age,
//         this.lastname = lastname
//     }

//     sayHello(){ //---------funkcija/metodas objekto viduje
//         console.log(`Hello, my name is ${this.name}`);
//     }

//     setAge(newAge) {
//         this.age = newAge;
//     }

//     getAge() {
//         return this.age;
//     }

// }

// const person1 = new Person("John", 25, "Stevenson")
// const person2 = new Person("Steve", 25, "Stevenson")

// console.log(person1, person2)

// person1.sayHello()

// console.log(person1.getAge())
// person1.setAge(27)
// console.log(person1.getAge())

// ----------------------------------------- uzduotis -------------------------

// Sukurti bank account su -- name, number, balance|| metodai: withdraw, deposit, getBalance

// class Person {     //---------Naujas uzrasymas su class sukurti objekta
//     constructor(name, number, balance) {
//         this.name = name,
//         this.number = number,
//         this.balance = balance
//     }

//     withdraw(amount) {
//         this.balance = this.balance - amount;
//     }

//     deposit(amount) {
//         this.balance = this.balance + amount;
//     }

//     getBalance() {
//         return this.balance;
//     }

// }

// const person1 = new Person("John", 8005411111254, 500);
// console.log(person1);

// console.log(person1.getBalance());
// person1.withdraw(200);
// console.log(person1.getBalance());
// person1.deposit(1000);
// console.log(person1.getBalance());

// ---------------------------Pavelo uzduotis-----------------------------------------------------------

// Sukurti dvi class
// Knyga tures pavadinima, autoriu, ir puslapiu skaiciu
// biblioteka tures pavadinima knygas, knygu sarasa || metodai paimti knyga, atiduoti knyga

// class Book {
//   constructor(name, author, pages) {
//     (this.name = name),
//       (this.author = author),
//       (this.pages = pages),
//       (this.availability = "available");
//   }
// }

// class Library {
//   constructor(name, books) {
//     (this.name = name), (this.storage = books);
//   }

//   takeBookOut(takenBook) {
//     const result = this.storage.find(
//       (element) =>
//         element.name === takenBook && element.availability === "available"
//     );

//     if (result === undefined) {
//       console.log("Šios knygos šiuo metu neturime");
//     } else {
//       console.log("Knyga sėkmingai paimta");
//       result.availability = "not available";
//     }

//   }

//   returnABook(returnedBook) {
//     const result = this.storage.find(
//       (element) =>
//         element.name === returnedBook &&
//         element.availability === "not available"
//     );

//     if (result === undefined) {
//       console.log("Ši knyga mums nepriklauso");
//     } else {
//       console.log("Knyga sėkmingai gražinta");
//       result.availability = "available";
//     }

//   }

//   getStorageList() {
//     return this.storage;
//   }
// }

// const book1 = new Book("Harry Potter", "J. K. Rowling", 421);
// const book2 = new Book("Harry Potter 2", "J. K. Rowling", 499);
// const book3 = new Book("Harry Potter 3", "J. K. Rowling", 689);

// const books = [book1, book2, book3];

// const library = new Library("VGTU biblioteka", books);
// // console.log(library.storage);

// library.takeBookOut("Harry Potter");
// console.log(library.getStorageList());

// library.returnABook("Harry Potter");
// console.log(library.getStorageList());

// library.returnABook("Harry Potter");
// console.log(library.getStorageList());

// library.takeBookOut("Harry Potter 2");
// console.log(library.getStorageList());

// library.takeBookOut("Harry Potter 2");
// console.log(library.getStorageList());

// library.takeBookOut("Lord of the rings");
// console.log(library.getStorageList());

// ---------------------------- OOP uzduotis ------------------------

// class Car {
//   constructor(brand, model, engine, basePrice) {
//     (this.brand = brand),
//       (this.model = model),
//       (this.engine = engine),
//       (this.basePrice = basePrice)
//   }

//   turnOn () {
//     console.log('vroom')
//   }

//   getPrice() {

//     let addPrice = 0;

//     if(this.engine === 'electric') {
//       addPrice = 10000;
//       } else if(this.engine === 'diesel') {
//         addPrice = 5000;
//       }
//   return this.basePrice + addPrice;

//   }
// }

// const car1 = new Car("VW", "Passat", 'diesel', 20000);
// const car2 = new Car("BMW", "535i", 'petrol', 45000);
// const car3 = new Car("Audi", "eTron", 'electric', 140000);

// car1.turnOn()

// console.log(car1.getPrice())
// console.log(car2.getPrice())
// console.log(car3.getPrice())

// ------------------------------- JS OOP uzduotis ---------------------

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   addToTable() {
//     const nameColumn = document.createElement("td");
//     nameColumn.textContent = this.name;

//     const surnameColumn = document.createElement("td");
//     surnameColumn.textContent = this.surname;

//     const tr = document.createElement("tr");
//     tr.append(nameColumn, surnameColumn);
//     document.querySelector("table > tbody").append(tr);
//   }
// }

// const capitalize = (text) =>
//   text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const fullname = document.getElementById("fullname").value;
//   const [name, surname] = fullname
//     .split(" ")
//     .map((namePart) => capitalize(namePart.trim()));
//     const person = new Person(name, surname);
//     person.addToTable(); 
// });

// --------------------------------------------------------------------------

// class Car {
//   constructor(brand, model, mileage, price, image) {
//     this.brand = brand;
//     this.model = model;
//     this.mileage = mileage;
//     this.price = price;
//     this.image = image;
//   }

//   addToList() {
//     const card = document.createElement('div');
//     card.className = "card";
//     card.addEventListener('click', () => alert(`Price: ${this.price}`));
    
//     const img = document.createElement('img');
//     img.src = this.image;
    
//     const text = document.createElement('h6');
//     text.innerText = `${this.brand} ${this.model}`;

//     card.append(img, text);
//     document.querySelector('div.wrapper').append(card)
//   }
// }

// document.querySelector('form').addEventListener('submit', (event) => {
//   event.preventDefault();
//   const brand = document.getElementById('brand').value;
//   const model = document.getElementById('model').value;
//   const mileage = document.getElementById('mileage').value;
//   const price = document.getElementById('price').value;
//   const image = document.getElementById('image').value;

//   const car = new Car(brand, model, mileage, price, image);
//   car.addToList();
// });

// // ---------------------------------------------------------------------

// // Tai tikriausiai paprasčiausias būdas išfiltruoti dublikatus,
// // bet internete galite rasti ir daugiau įvairių variantų
// const removeDuplicates = arr => [...new Set(arr)];
// console.log(removeDuplicates([1, 3, 3, 5, 5, 5]));



// ----------------------------------------------------------------------------
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   compareAge() {
//     if (this.age >= 18) {
//       console.log("Person is old enough to drink");
//     } else {
//       console.log("Person is to young to drink");
//     }
//   }
// }

// const person1 = new Person("Mantas", 26);
// person1.compareAge();

// // ----------------------------------------------------------------------------

// const array = [1, 5, "a", "g", "z", 6];

// function filterLetters(arr) {
//   return array.filter((el) => typeof el === "number");
// }
// console.log(filterLetters(array));

// ---------------------------------------------------------------------------

function duplicateLetters(text) {
  const newText = text
    .split("")
    .map((element) => (element.match(/[a-z]/i) ? element.repeat(2) : element))
    .join("");

  return newText;
}

console.log(duplicateLetters("Petras 123 Slekys"));