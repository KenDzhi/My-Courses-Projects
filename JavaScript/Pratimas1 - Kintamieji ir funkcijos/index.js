// "99" - su kabutemis skaito kaip teksta
// 99 - be kabuciu skaito kaip skaicius

// Visada reikia sukurti konteineri musu reiksmei. 
// Jei norima issaugoti senas reiksmes, reikia sukurti naujus konteinerius senoms reiksmems
// Var nebenaudojamas, bet sutinkamas sename kode. Teisingas naudojimas const/let


// !!!!!!!!!!!!!!!! Kintamieji ir veiksmu sekos/funkcijos!!!!!!!!

// var firstName = "John"
// var price1 = 12.99;
// var price2 = 9.59;
// var total = price1 + price2;

// var price1Old = price1; 
// price1 = 50; 

// console.log(total);
// console.log(price1);

// total = price1 + price2;

// console.log(total);
// console.log(price1Old);

// alert("Hello");
// prompt("Hello, how old are you?");

function sayHelloToName(name) {
    var text = "Hello" + name;
    console.log(text)

}

function formatHelloToName(name) {
    var text = "Hello " + name;
    return text;
}

var helloText = formatHelloToName("Steve");

// prompt("Hello, how old are you?")
var age = prompt("Hello, how old are you?")
console.log(age)


