// Sukurti array "students", kuriame būtų objektai su name, age ir grade nuo 1 - 10
// Turėtų būti array kuris turi daugiau nei vieną objektą viduje
// Sukurti fuknciją, "avrageGrade" kuris priima "students" kaip parametrą
// Ir grąžina visų mokiinių pažimių vidurkį.
// Sukurti dar vieną fuknciją kuri grąžintų vyriausią studentą


// ------------------------------------------- Array with object inside-------------------------
// const students = [
//     {
//         name: "Jonas",
//         age: 19,
//         grade: 8
//     },
//     {
//         name: "Paulius",
//         age: 20,
//         grade: 10
//     },
//     {
//         name: "Petras",
//         age: 23,
//         grade: 6
//     },
//     {
//         name: "Kazys",
//         age: 18,
//         grade: 6
//     }
// ]

//------------------------------------------------

const studentsNew = pabaigt;
let students = [ ];

function collectStudentsData(elementList){
    for (i = 0; i < element.List.length; i++) {
        name: element.querrySelector;
        age: ;
        grade:;

    
    }
}




// ------------------------------- Pazymo vidurkis is array su object -------------------------------
function averageGrade (array){
    
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        const grades = array[i].grade;
        sum = sum + grades;
    }
    const average = sum / array.length;
    return average
}
console.log(averageGrade(students));



// ------------------------------- Vyriausias amzius ir array su object ----------------------------
function oldestStudent (array){
    let element = 0;
    for (i = 0; i < array.length; i++){
        if (element <= array[i].age) {
            element = array[i].age;
        }
    }
    const oldestStudent = element;
    return oldestStudent
}
console.log(oldestStudent(students));

// ----------------------------------------------------------------------------------------------

