// // ----------------- Adding modern string -------------

// const hello = 'Hi';
// const personName = 'John'

// const greeting = `${hello}, ${personName}`
// console.log(greeting)
// // ------------------------------------------------------



// // -------- IF, Else one-liner--------
// const a = 5;

// const b = a > 0 ? "taip" : "ne"
// console.log(b)




// // ----------- Sort --------------------------

// const myArray = [3,2,5,4,8,9,5];

// console.log(myArray.sort((a, b) => {

//     const sorted = `${b} - ${a} = ${b - a}`;
//     // console.log(sorted)

//     return b - a
// }))

// const myNames = ['Mantas', 'Petras', 'Jonas', 'Lukas']

// console.log(myNames.sort((a, b) => {

//     if(a < b) return -1
//     if(a > b) return 1

//     return 0
// }))





// // ------------- Reduce ------------------------


// const myReduceArray = [1, 2, 5, 9, 15];

// console.log('Main', myReduceArray.reduce((prev, curr) => {

//     // console.log(prev);
//     // console.log(curr);
    
//     return prev + curr
    
// }, 0))




// const myReduceArray2 = ['Hi John', 'Bye Peter', 'Hi Steve', 'Bye Annie'];

// console.log(myReduceArray2.reduce((acc, curr) => {

//     if(curr.includes('Hi')) {
        
//         if(acc) {
//             return acc + ', ' + curr;
//         }
        
//         return curr
//     }
    
//     return acc
    
// }, ''))





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
    
//         if(!acc[curr.age] > 20) {
//             acc[curr.age] = []
//         }

//         acc[curr.age].push(curr)

//         return acc

//     }, {})
// )
// --------------------------------------------------------------------

// --------------------------------- Uzduotis 1 --------------------------------

// const friendNames = ['Erika', 'Danielius', 'Modestas', 'Arnas', 'Roberta', 'Emilija']

// const sortFriends = friendNames.sort((a, b) => b > a ? 1 : -1);
// console.log(sortFriends)

// const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
// const sortedNumbers = numbers.sort((a, b) => b - a);
// console.log(sortedNumbers);

// const numbers2 = [10, 5, 20, 4];
// const sortedNumbers2 = numbers2.sort((a, b) => b - a);
// console.log(sortedNumbers2[0]);

// --------------------------------- Uzduotis 2 --------------------------

// const numbers3 = [1, 3, 7];
// console.log(numbers3.reduce((acc, curr) => acc + curr));

// const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
// console.log(cars.reduce((acc, curr) => curr.length === 3 ? acc + 1: acc, 0));

// const numberArray = [5, 10, 20, 4, 11, 13];
// console.log(numberArray.reduce((acc, curr) => acc > curr ? acc : curr));

// ---------------------------------- Uzduotis 3----------------------------

// const people = [
//     {
//       name: "Petras",
//       age: "18"
//     },
//     {
//       name: "Jonas",
//       age: 15
//     },
//     {
//       name: "Antanas",
//       age: 20
//     },
//     {
//       name: "Urtė",
//       age: 10
//     },
//     {
//       name: "Diana",
//       age: 25
//     },
//     {
//       name: "Ieva",
//       age: 16
//     }
//   ];

//   console.log(people.filter(value => value.age >= 18))

//   console.log(people.filter(value => value.age >= 18).map(person => person.name))

//   console.log(people.filter(value => value.age >= 18).map(person => person.name).sort())

//   const drinks = [
//     { 
//     name: "cheeze", 
//     price: 2 
//     },
//     {
//     name: "deer", 
//     price: 10 
//     },
//     {
//     name: "mellon", 
//     price: 3 
//     },
//     {
//     name: "soda", 
//     price: 3 
//     },
//     {
//     name: "pork", 
//     price: 5 
//     }
//   ]
  
//   function fn(groceries){
//     groceries.sort((a, b) => a.price - b.price)
//     return {pigiausias: groceries[0].name, brangiausias: groceries[groceries.length - 1].name}
//   }
  
//   console.log(fn(drinks))