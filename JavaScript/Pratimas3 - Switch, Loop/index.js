// !!!!!!!!!!!!!!!!!!! Swich'ai !!!!!!!!!!!!!!!!!!

// const hourNumber = prompt("Kokia dabar valanda?");
// const hour = Number(hourNumber);

// switch (hour) {

//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         console.log("Naktis");
//         break;

//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     case 12:
//         console.log("Rytas");
//         break;

//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//         console.log("Diena");
//         break;

//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//     case 24:
//         console.log("Vakaras");
//         break;

//     default:
//         console.log("Neteisingas laikas")
//         break;
// }

// -------------------------------------------------------

// !!!!!!!!!!!!!!!!!!!!!!! Loops !!!!!!!!!!!!!!!!!!!!!!!!!

// let text = "Mantas";

// for (let i = 0; i < 10; i = i + 1) {
//     console.log(text)
// }
// console.log("Finish")

// -------------------------------------------------------


// ivedus skaiciu turi isvest visus lyginius skaicius iki ivesto skaiciaus

let promptNumber= prompt("Pick a number");
let number = Number(promptNumber);

for (let i = 2; i <= number; i++) {
    if (i % 2 == 0){
        console.log (i)
    }
}
