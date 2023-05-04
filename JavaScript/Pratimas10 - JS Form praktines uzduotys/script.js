// -- ----------------------------------------- 1 uzduotis -------------------------------------- 

//  -- Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. 
// Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). 
// O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). 
// Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų 
// įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų". 

// ----------------------------------------------------------------------------------------------------------

// const baseBonus = 50;
// const bonusFor10Years = 50;
// const bonusFor20Years = 100;

// document.querySelector("form").addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {

//     event.preventDefault()
    
//     const yearsInCompany = document.getElementById("years").value;
//     const finalBonus = document.querySelector("h1");

//     if (yearsInCompany >= 10 && yearsInCompany < 20) {
//         finalBonus.textContent = 'Jūsų bonusas: ' + (baseBonus + bonusFor10Years) + ' Eur.';

//     } else if (yearsInCompany >= 20) {
//         finalBonus.textContent = 'Jūsų bonusas: ' + (baseBonus + bonusFor10Years + bonusFor20Years) + ' Eur.';
          
//       } else {
//         finalBonus.textContent = 'Jūsų bonusas: ' + (baseBonus) + ' Eur.';
//         }
// }

// --------------------------------------------------------------------------------------------------------------------


// <!-- ---------------------------------------------- 2 uzduotis -----------------------------------------------------
// Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - 
// pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? 
// Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji 
// (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). 
// Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. 
// Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas. 

// ----------------------------------------------------------------------------------------------------------

// document.querySelector("form").addEventListener("submit", handleFormSubmit);


// function handleFormSubmit(event) {

//     event.preventDefault();

//     const enteredYear = document.getElementById("inputYear").value;
    
//     if((enteredYear % 4 == 0) && (enteredYear % 100 != 0 ) || (enteredYear % 400 == 0) ) {
//         document.querySelector("h1").textContent = "Dienų skaičius " + enteredYear + " metais: 366"
//     } else {
//         document.querySelector("h1").textContent = "Dienų skaičius " + enteredYear + " metais: 365"
//     }

// }

//  ---------------------------------------------- 3 uzduotis --------------------------------------
// Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi,
// o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu. 

// ----------------------------------------------------------------------------------------------------------


// document.querySelector("form").addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {

//     event.preventDefault()


//     const celciusTemp = document.getElementById("tempCelcius").value;
//     const farenheitTemp = document.querySelector("h1");

//     farenheitTemp.textContent = Math.round((celciusTemp * 1.8) + 32) + ' °F';
// }



//  ---------------------------------------------- 4 uzduotis --------------------------------------
// Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". 
// Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. 
// Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas". 

// ----------------------------------------------------------------------------------------------------------


// document.querySelector("form").addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {

//     event.preventDefault()

//     const enteredEmail = document.querySelector("input[type=email]").value;
//     console.log(enteredEmail)
//     const agreedToReceiveEmails = document.querySelector("input[type=checkbox]").checked;
//     console.log(agreedToReceiveEmails);


//     if (!agreedToReceiveEmails) {
//         document.querySelector("h1").textContent = "Registracija nesėkminga";
//     } else {
//         document.querySelector("h1").textContent = "El. paštas " + enteredEmail + " sėkmingai užregistruotas";
//     }
// }


//  ---------------------------------------------- 5 uzduotis --------------------------------------
// Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. 
// Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. 
// List itemuose turi būti tavo vardas :) 

// ----------------------------------------------------------------------------------------------------------



    // document.querySelector("form").addEventListener("submit", handleFormSubmit);

    //     function handleFormSubmit(event) {

    //         event.preventDefault()

    //         const nameInput = document.getElementById("name").value;
    //         const numberInput = document.getElementById("number").value;

    //         let listItemToAdd = "";

    //         for (i = 0; i < numberInput; i++){
    //             listItemToAdd += "<li>" + nameInput + "</li>";
    //             document.querySelector("ul").innerHTML = listItemToAdd;
    //         }
    //     }



//  ---------------------------------------------- 6 uzduotis --------------------------------------
// Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. 
// Po forma - tegul būna tusčias div elementas. 
// Jame reikia atvaizduoi trikampį pagal įvestą input. 
// Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia;
// pasibaigus ar pastrigus - būtinai pasinagrinėkite 
// (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).

// Pvz:
// Įvesta: 2
// Rezultatas:
// *
// **

// Įvesta: 5
// Rezultatas:
// *
// **
// ***
// ****
// ***** 

// ----------------------------------------------------------------------------------------------------------

// document.querySelector("form").addEventListener("submit", handleFormSubmit);

//     let rowToAdd = " ";
//     let zvaigzdute = " "

//         function handleFormSubmit(event) {

//             event.preventDefault()

//             const numberInput = document.getElementById("inputNumber").value;

//                 for (i = 0; i < numberInput ; i++){

//                     zvaigzdute += "*";
//                     rowToAdd += zvaigzdute + "<br>"
                    
//                 }

//                 document.getElementById("divToModify").innerHTML = rowToAdd; 
//             }


// ----------------------------------------------------------------------------------------------------------