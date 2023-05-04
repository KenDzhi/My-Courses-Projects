// const car = {
//     doors: 5,
//     color: "red",
//     brand: "VW"
// }

// console.log(car);
// console.log(car.brand)

// ---------------------------------------------------------------------------------

// document.querySelector("form").addEventListener("submit", formToProcess)

// function formToProcess(){
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const surname = document.getElementById("surname").value;

//     const person = {
//         name: name,
//         surname: surname,
//     }

//     console.log(person)
// }

// ---------------------------------------------------------------------------------

document.querySelector("form").addEventListener("submit", formToProcess)

function formToProcess(){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const isLegal = age > 18;

    const person = {
        name: name,
        isLegalAge: isLegal,
    }
    console.log(person)
}