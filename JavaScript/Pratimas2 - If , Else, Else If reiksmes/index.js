// const response = prompt("How old are you?");
// const age = Number(response);
// const isOlderThan18 = age >= 18;

// console.log(age);
// console.log(isOlderThan18);



// !!!!!!!!!!!!!!!!!!!!!!!!!!!! IF reiksme !!!!!!!!!!!!!!!!!!!!!!!!!!

// if(age >= 18) {
//     console.log("Welcome to the secret society page");
// } else {
//     console.log("Grow up please, it is an adult page");
// }

// if(age < 18) {
//     console.log("Grow up please, it is an adult page");
// } else {
//     console.log("Welcome to the secret society page");
// }

// if (age < 18) {
//     console.log("Per jaunas")
// } else if (age > 60) {
//     console.log("Per daug pagyvenes") 
// } else {
//     console.log("Tinkamas")
// }



// !!!!!!!!!!!!!!!!! Kintamuju apkeitimas vietomis! !!!!!!!!!!!!!!!!

// let response1 = prompt("How old are you");
// let response2 = prompt("How much money do you have in you balance?");

// let responseNew = response1;
// response1 = response2;
// response2 = responseNew;

// console.log(response1);
// console.log(response2);



// !!!!!!!!!!!!!!!!!!!!! Kintamieji didejimo tvarka !!!!!!!!!!!!!!!!!!

let response1 = prompt("Nuo 1 iki 100");
let response2 = prompt("Nuo 1 iki 100");
let response3 = prompt("Nuo 1 iki 100");

// -------------------------------------------------------------------

if (response1 <= response2) {
    if (response2 <= response3) {
            console.log(response1, response2, response3)
    }
     else if (response2 >= response3) {
        if (response3 >= response1){
            console.log(response1, response3, response2)
        }
    }   
}

if (response2 <= response1) {
    if(response1 <= response3) {
            console.log(response2, response1, response3)
    }

    else if (response1 >=  response3) {
        if(response2 <= response3){
            console.log(response2, response3, response1)
        }
    }
}

if (response3 <= response1) {
    if(response1 <= response2){
            console.log(response3, response1, response2)
    }
      
     else if (response1 >=  response2) {
        if(response3 <= response2){
            console.log(response3, response2, response1)
        }
    }
}
