
// ------------------------------------1 Uzduotis-----------------------------------

document.querySelector("h1").addEventListener("click", styleToChange)

function styleToChange(event){

    document.querySelector("h1").style.textAlign = "center";
    document.querySelector("h1").style.color = "red";
    document.querySelector("h1").style.fontSize = "64px";

};

// ------------------------------------2,3 Uzduotis-----------------------------------


const button = document.querySelector('button');
button.style.cssText = 'position:absolute; top:0; left:0';

let corner = 0;
const cornerStyles = ['position:absolute; top:0; right:0;', 'position:absolute; bottom:0; right:0;', 'position:absolute; bottom:0; left:0;', 'position:absolute; top:0; left:0;'];
function changePosition(event) {
  if (corner < cornerStyles.length) {
    event.target.style.cssText = cornerStyles[corner];
    corner++;
  }
  if (corner === cornerStyles.length) {
    corner = 0;
  }
}

button.addEventListener('click', changePosition);

// // ------------------------------------4 Uzduotis-----------------------------------


document.querySelector("input").addEventListener("input", formToProcess); 

function formToProcess(event){

    const name = document.querySelector("input").value;
    console.log(name)

    if(name.length <= 2){
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "green";
    }

}

// // ------------------------------------5 Uzduotis-----------------------------------


// document.querySelector('button').addEventListener('click', colorToPick)

// const colorChoises = ["red", "green", "blue", "yellow"]

// function colorToPick(event) {

//   const i = Math.floor(Math.random() * 4);
//   console.log(i);
//   document.querySelector('button').style.backgroundColor = colorChoises[i];

// }

// // ------------------------------------6 Uzduotis-----------------------------------


document.querySelector('button').addEventListener('click', rngColorGenerator);

function rngColorGenerator(event) {

    const R = Math.round(Math.random() * 255);
    console.log(R);
    const G = Math.round(Math.random() * 255);
    console.log(G);
    const B = Math.round(Math.random() * 255);
    console.log(B);

    document.querySelector('button').style.backgroundColor = `rgb(${R},${G},${B})`
  }
  