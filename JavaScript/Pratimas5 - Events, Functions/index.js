// function sum(skaicius1, skaicius2) {
//     const skaicius = skaicius1 + skaicius2;
//     return skaicius

// }

// const functionCall = sum(1, 10);
// console.log(functionCall);

// Funkcija galima ne tik matematiniams veiksmams, bet ir css/html manipuliacijai
// function changeText(CSSSelector, textCol){
//     document.querySelector(CSSSelector).textContent = text;
//     return true;
// }
// const texrChange = changeText('div', 'Mano tekstas');

// Konstantai suteikiama funkcijos reiksme
// const myFunction = () => {
// }


// -------------------------Event'ai-----------------------------
// function divClick() {
//     alert("Click");
// }

// function DOMReadyFunction() {
//     document.querySelector('div.my-div').textContent = 'Hi!';
//     document.querySelector('div.my-div').addEventListener('click', divClick); 
// }

// document.addEventListener('DOMContentLoaded', DOMReadyFunction);
//---------------------------------------------------------------

// // ---------------Skirtingi funkciju aprasymo budai -------------

// function pavadinimas(parametras){
//     //kodas
//     return paramentras;
// }

// document.addEventListener('Event_Pavadinimas', function(event){
//     //kodas
// })

// document.querySelector('div').addEventListener('click', (event) => {
//     //kodas
// }) -----------------------------------------------------------------



// ----------------- Praktine uzduotis - JS funkcijos ---------------------------

function alert_name(name) {
    console.log(name);
}
alert_name('Mantas');

// ----------------------------------------------------

function rng() {
    return Math.round(Math.random() * 5) + 1;
}
console.log(rng());

// ----------------------------------------------------

function name_surnameLenght(name, surname) {
    return name.length + surname.length;
}
console.log(name_surnameLenght('Mantas', 'Katleris'));

//-----------------------------------------------------

function letter_by_number(number) {
  const letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return letter[number];
}
console.log(letter_by_number(1));

// ---------------------------------------------------------

function math(n1, n2, operator) {

    if (operator == 'sum'){
        console.log(n1 + n2);

        } else if (operator == 'sub') {
        console.log(n1 - n2); 

            } else if (operator == 'div') {
            console.log(n1 / n2)
                } else if (operator == 'multi'){
                console.log(n1 * n2)
                }
        }

math(1, 2, 'multi');

// ---------------------------------------------------------------

function rng() {
    return Math.floor(Math.random() * 10 + 1);
}
  
function rngSquared(rng) {
    return Math.pow(rng, 2);
}
  
console.log(rngSquared(rng()))

//----------------------------------------------------------------

// ----------------- Praktine uzduotis - JS eventai ---------------------------

function alertName(){
    alert("Mantas")
}

document.querySelector('button').addEventListener('click', alertName);

// ------------------------------------------------------------------------------






 
