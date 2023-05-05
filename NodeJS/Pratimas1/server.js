// const name = "Mantas";
// const nickname = "KenDzhi";

// console.log(`Hello from Node world. My name is ${name} but in online world I'm known as ${nickname}`);


// ---------------- Uzduotis ---------------------

console.log(process.argv[2]);
console.log(process.argv[3]);

function randomNumberGenerator(min, max) {
    const rng = Math.random() * (max - min) + min;
    return rng
  }

console.log(randomNumberGenerator(Number(process.argv[2]), Number(process.argv[3])))

// --------------------------------------------------