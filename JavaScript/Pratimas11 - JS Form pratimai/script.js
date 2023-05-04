// ----------------------------------------------- 1 uzduotis -------------------------------------

// Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. 
// Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
// L
// L
// L
// L L L L
//-------------------------------------------------------------------------------------------------
// document.querySelector("form").addEventListener("submit", handleForm);


    // function handleForm(event) {

    //     event.preventDefault();

    //     const numberInput = document.getElementById("size").value;
    //     let LToDraw = " ";

    //     for (i = 0; i < numberInput - 1; i++) {
    //         LToDraw += "L" + "<br>";
    //     }

    //     for (i = 0; i < numberInput; i++) {
    //         LToDraw += "L";
    //     }
        
    //     document.querySelector("div").innerHTML = LToDraw; 
    // }

//-------------------------------------------------------------------------------------------------

// ----------------------------------------------- 2 uzduotis -------------------------------------

// Sukurkite panašią funkciją, kuri atspausdintų C raidę.
// t.y. jei kviesite funkciją fn(5), tai turėtų atspausdinti tokį rezultatą:
// CCCCC
// C
// C
// C
// CCCCC
//-------------------------------------------------------------------------------------------------

// document.querySelector("form").addEventListener("submit", handleForm);

// function handleForm(event) {

//     event.preventDefault();

//     const numberInput = document.getElementById("size").value;
//     let cToDraw = " ";

//     for (i = 1; i < numberInput; i++) {
//         cToDraw += "C";
//     }

//     for (i = 0; i < numberInput - 1; i++) {
//         cToDraw += "C" + "<br>";
//     }

//     for (i = 0; i < numberInput; i++) {
//         cToDraw += "C";
//     }
    
//     document.querySelector("div").innerHTML = cToDraw; 
// }


//-------------------------------------------------------------------------------------------------

// ----------------------------------------------- 3 uzduotis -------------------------------------

// Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), 
// vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
// Pvz.: Petras, Jonas, Mantas, Antanas.
//-------------------------------------------------------------------------------------------------

// document.getElementById("names").addEventListener("blur", handleForm);

//     function handleForm(event) {

//         const name = document.getElementById("names").value;

//         if (name) {
//             document.querySelector("div").innerText += name + ", ";
//         }
//   }



//-------------------------------------------------------------------------------------------------

// ----------------------------------------------- 4 uzduotis -------------------------------------

// Sukurkite formą su dviem inputais, kurie paims skaičius. 
// Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
// Pvz.: fn(101, 81) grąžins 101.
//-------------------------------------------------------------------------------------------------






//-------------------------------------------------------------------------------------------------

// ----------------------------------------------- 5,6 uzduotis -------------------------------------

// Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5. 
// Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).
//-------------------------------------------------------------------------------------------------
const rng = Math.floor(Math.random() * 5) + 1;
console.log(rng);

document.querySelector("form").addEventListener("submit", handleForm);

function handleForm() {

    event.preventDefault();

    let guessesCounter = 0;
    guessesCounter++;

    if (rng === Number(document.getElementById('guess').value)) {
        alert(`Atspėjote. Spėjimų skaičius ${guessesCounter}`);
        guessesCounter = 0;
    }   else {
            alert("Neatspėjote.");
    }
}