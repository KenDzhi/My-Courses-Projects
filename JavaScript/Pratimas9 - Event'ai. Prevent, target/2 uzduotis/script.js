document.addEventListener('DOMContentLoaded', () => {

document.querySelector("form").addEventListener("submit", formCheck)

function formCheck (event) {
    event.preventDefault();

    const age = document.querySelector("input[type=number]").value;
    console.log(age)

    const isCriminal = document.querySelector("input[type=checkbox]").checked;
    console.log(isCriminal);


    if (age >= 18 && age <= 30 && !isCriminal) {
        document.querySelector("h1").textContent = "Kariuomenei tinkamas, tikrink sąrašus.";
    } else {
        document.querySelector("h1").textContent = "Kariuomenei netinkamas.";
    }

}
})