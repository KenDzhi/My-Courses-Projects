// // Sukuria promise (Pazada)// Priima callbackine fukncija su parametrais resolve, reject
// Resolve grazina kas nutinka po sekmes
// reject atmeta (klaida)

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve su papildomu data JSON Stringify tarkim.
    resolve(JSON.stringify([]));
  });
});

// .then nusirodo kas buna kai sekmingai grazina

// Then galima chainint - tai reiskia, kad galiu apdoroti pirmu etapu
// pvz - isparsinti savo JSON string// toliau isconsole loginti
myPromise1
  .then((data) => JSON.parse(data))
  .then((data) => console.log(data))
  // // Catch naudojamas kai kodas nubega netinkama linkme, ir grazino klaida
  .catch((error) => console.error(error));

// // Async nusirodo javascirptui, kad suprastu
// jog jis veiks siektiek kitaip,
// vygdys asyncoriniskai
async function myFunction() {
  //
  // await, nusirodo kai mes norime sulaukti grazinamo duomens
  // naudojamas kai turime promise
  console.log(await myPromise1);
  //
  // Galime ir nusirodyti await su then.
  // Tokiu atveju, kodas palauks kol yvygdysime promisa
  // bet taip pat izoliuosime jo sekme .then
  await myPromise1.then((data) => JSON.parse(data));
}

// -------------------------- promises 1,2 uzduotis ----------------------

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 5000);
// });

// promise.then(() => alert("Yes, veikia"));

// console.log(promise);

// const rng = Math.floor(Math.random() * 5) + 1;
// console.log(rng);

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (rng > 1) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 5000);
// });

// myPromise.then(function () {
//   console.log("Yes, veikia");
// });

// myPromise.catch(function () {
//   console.log("Nesuveikė");
// });

// ------------------------------3 uzduotis-------------------------------

// const rng = Math.floor(Math.random() * 5) + 1;
// console.log(rng);

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (rng > 1) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 5000);
// });

// myPromise
//   .then(function () {
//     return "this is a message";
//   })
//   .then(function (message) {
//     console.log(message);
//   })
//   .catch(function () {
//     console.log("Nesuveikė");
//   });

// -----------------------------------------------------------------------