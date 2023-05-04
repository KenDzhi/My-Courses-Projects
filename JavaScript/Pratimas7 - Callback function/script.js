

// // --- Funkcija sukurianti nauja array is seno array pasalinant paskutini---
// let myArray = [1, 2, 3, 4, 5, 6];

// function deleteLastArrayElement(arrayToModify) {
//      const array = [];
//      for (let i = 0; i < arrayToModify.length - 1; i++) {
//         const element = arrayToModify[i];
//          array.push(element);
//         } 
//         return array; 
//     }
//     const newArray = deleteLastArrayElement(myArray);
//     console.log(newArray);

// // --------------------Funkcija funkcijoje-----------------------------

// function funcName(a, b, funcToCall) {
//     const result = funcToCall(a, b);
//     console.log(result)
// }

// function sumNumber(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }

// funcName(10, 15, sumNumber)

// function countLarger(first, second){
//     if (first > second) {
//     return first;
//     } return second
// }
// funcName (10, 15, countLarger)

// -----------------------------------Uzduotis--------------------------------------------------
// parasyti function, kuri priema per parametrus masyva, ir kita funkcija.
// function turi grazinti nauja masyva
// naujo masyvo elementai yra 
// priimtos funkcijos rezultatas su seno masyvo elementais

// function fn(arr, callBack ) {
//     ///... jusu kodas
//     const a = [];
//      for (let i = 0; i < arr.length; i++) {
//         const oldElement = arr[i];
//         const newElement = callBack(oldElement)
//          a.push(newElement);
//         } 
//         return a;
//   }

//   function addTen(a) {
//     return a +10;
//   }

//   const array = [1,2,3]
//   const newArray = fn(array, addTen) // [11,12,13]
//   console.log(newArray) // [11,12,13]
//   console.log (array); //[1, 2, 3]

// ------------------------------------Uzduotis 2--------------------------------------------------

// parasyti function, kuri priema per parametrus masyva, ir kita funkcija.
// function turi grazinti nauja masyva
// i nauja masyva ieina tik tie seno masyvo elementai, su kuriais 
// iskvietus per parametra paduota funkcija grazina true
// 
// function fn(arr, callBack) {

//     const a = [];

//     for (let i = 0; i < arr.length; i++) {
//        const oldElement = arr[i];
//        const newElement = callBack(oldElement)
//        if(newElement){
//         a.push(oldElement);
//        }
//     } 

//     return a;
//   }

//   function isMoreThan20(a) {
//     return a > 20;
//   }

//   const array = [10, 25, 30, 15];
//   const newArray = fn(array, isMoreThan20); 
//   console.log(newArray); // [ 25, 30,]
//   console.log(array); //  [10, 25, 30, 15]