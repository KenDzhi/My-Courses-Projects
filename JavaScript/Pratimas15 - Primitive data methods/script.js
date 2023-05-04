// --------------------------------Number'iai----------------------------------------
// Ar skaicius yra pilnos reiksmes? (float/integer)
// Number.isInteger()
// ------------------------------------------------------------------------


// const skaicius = "15.12";
// Number.parseFloat(skaicius) -Konvertuoja kintamaji i float
// Number.parseInt() -Konvertuoja kintamaji i integer'i
// ------------------------------------------------------------------------

// NaN - Not a number
// isNaN(skaicius) - Galima patikrinti ar tai NERA skaicius. Grazina false/true
// ------------------------------------------------------------------------

// 'skaiciussupokableliu.toFixed() - Suapvalina po kablelio tiek, kiek ivesta tarp (). 
// Neivedus nieko, apvalina iki sveiku.
// ------------------------------------------------------------------------



// -----------------------------String'ai-------------------------------------------

// numberArBooleanArKazkaskito.tostring - pavercia elementa i string.

// String taip pat turi .length, pvz "labas".length - ilgis 5
// Taip pat galima pasiimti index'a su [], pvz. "labas"[1] grazina "a"
// ------------------------------------------------------------------------

// const vardai = "Jonas, Petras, Antanas";
// vardai.split(' , ')  - isskaido string'a i Array nuo pasirinkto elemento, siuo atveju [Jonas, Petras, Antanas]
// ------------------------------------------------------------------------

// const vardas = 'jonas'
// vardas.toLocaleUpperCase() - pavercia string i didziasias raides, siuo atveju "JONAS"

// const vardas = 'JONAS'
// vardas.toLocaleLowerCase() - pavercia string i mazasias raides, siuo atveju "jonas"
// ------------------------------------------------------------------------

// const text = "Mano vardas yra Mantas"
// text.includes("Mantas") - grazina true/false reikme, ar kintamasis turi nurodyta reikme tarp ()
// 
// ------------------------------------------------------------------------

// const text = "labas"
// text.indexOf('b') - grazina index'a ieskomo dalyko tarp (). Iesko nuo pradzios iki galo.
// text.lastIndexOf('b') - grazina index'a ieskomo dalyko tarp (). Iesko nuo galo iki pradzios.
// text.includes("b", text.indexOf('s') - grazina true/false reikme, ar kintamasis turi nurodyta reikme ir ji yra specifineje vietoje
// ------------------------------------------------------------------------

// const sveikinimas = 'Hi Jonas';
// sveikinimas.replace('Hi', 'Labas') - galima keisti stringo vidu - siuo atveju 'Hi', keicia i 'Labas'
// Gaunasi 'Labas Jonas'
// ------------------------------------------------------------------------

// const text = 'testas'
// text.splice(1,3) - pasiekiamas string'o dalis tarp index'u. grazina 'est'
// text.splice(text.indexOf('e'), text.indexOf('a')) - grazins 'est'
// ------------------------------------------------------------------------

// const text = 'Labas'
// text.at(-1)  - galima surasti simboli kintamajame. Galima naudoti +skaiciu-iesko nuo priekio, 
// ir -skaiciu-iesko nuo galo 

// ------------------------------------------------------------------------

// text.concat(' ', 'Jonas', '!') - prie pasirinkto string'o prideda kitus nurodytus elementus
// ------------------------------------------------------------------------

// text.repeat(2) - grazina string'a pakartota x kartu kieki
// ------------------------------------------------------------------------

// text.startsWith('la') - grazina true/false jei string'as prasideda su nurodyta reikme
// text.endsWith('as') - grazina true/false jei string'as baigiasi su nurodyta reikme
// ------------------------------------------------------------------------

// Text.trim() - istrina white spaces (tarpus) stringe
// ------------------------------------------------------------------------

const name = "mAntAS"
const surname = "peTraItiS"

function toUpperCase(nameToUse){

  const firstLetter = nameToUse.charAt(0);
  const firstToUpperCase = firstLetter.toUpperCase();

  const leftoverLetters = nameToUse.slice(1)
  const leftoverLettersToLowerCase = leftoverLetters.toLowerCase()

  const outputWithFirstUpperCase = firstToUpperCase + leftoverLettersToLowerCase;

  return outputWithFirstUpperCase
}

console.log(toUpperCase(name))

// ------------------------------------------------------------