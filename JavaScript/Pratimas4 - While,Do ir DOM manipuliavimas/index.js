
// -------------- Konsole isveda varda keleta kartu (While)--------

// const name = 'John';
// let i = 3;
// while (i > 0) {
//   console.log(name);
//   i--;
// }

// --------------------- While/do ----------------------

// let combo = '';
// const name = 'John';
// let times = 3;
// do {
//   combo += name;
//   times--;
// } while (times > 0);
// console.log(combo);

// ------------------------Math biblioteka---------------------

// // Suskaičiuok su JS koks bus cos(0) (t.y. cos, kai kampas 0 radians).
// Math.cos(0)

// // Sukurk random skaičių tarp 1 ir 5 (įskaitant abu).
// Math.floor(Math.random() * 5) + 1

// // Sukurk random skaičių tarp 5 ir 12 (įskaitant abu).
// Math.floor(Math.random() * (12 - 5 + 1)) + 5

// // Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).
// const randomNumber = Math.floor(Math.random() * 5) + 1;
// if (randomNumber === 1) {
//   alert("You won");
// } else {
//   alert("Try again next time");
// }

// ----------------------------------------------------------

// --------------------- DOM manipuliacija ---------------------

// const name = 'John';
// const h2 = document.createElement('h2');
// h2.textContent = name;
// document.body.append(h2);

// //----------------------------------------------------------------

// document.getElementById('name').textContent = name;

// //----------------------------------------------------------------

// document.querySelector('li:last-child').textContent = 'Sūris';

// // ---------------------------------------------------------------

// document.querySelector('.bluetext > span').textContent = 'blue';

// //----------------------------------------------------------------

const firstListItem = document.querySelector('li:first-child');
const secondListItem = document.querySelector('li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;
