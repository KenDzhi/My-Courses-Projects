// const name = "Mantas";
// const nickname = "KenDzhi";

// console.log(`Hello from Node world. My name is ${name} but in online world I'm known as ${nickname}`);




// ---------------- Uzduotis ---------------------

// console.log(process.argv[2]);
// console.log(process.argv[3]);

// function randomNumberGenerator(min, max) {
//   const rng = Math.random() * (max - min) + min;
//   return rng;
// }

// console.log(
//   randomNumberGenerator(Number(process.argv[2]), Number(process.argv[3]))
// );





// --------------------------------------------------

// const http = require("http");
// const server = http.createServer((request, response) => {
//   response.end("Hello World from Node.js");
// });

// server.listen(3000, () => {
//   console.log("Serveris yra paleistas");
// });

// --------------------------------------------------

const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server is started")
});

app.get('/', (request, response) => {
    response.send("Hello world from Node.JS Express")
})
