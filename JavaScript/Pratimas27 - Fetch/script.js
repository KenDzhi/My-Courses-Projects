// function apdorojimas(json) {}

// fetch("https://randommm-data-api.com/api/users/random_user?size=3")
//   .then((gryzta) => gryzta.json())
//   .then(apdorojimas)
//   .catch(klaidosFunkcija);
// async function doRequest() {
//   // try catch bloke mes nurodom tapaty kas butu su then, catch
//   try {
//     console.log("start");
//     // darome fetch su await.
//     const data = await fetch(
//       "https://random-data-api.com/api/users/random_user?size=5"
//     );
//     console.log("got data", data);
//     const myJson = await data.text();
//     console.log(myJson);

//     // Pasitikriname struktura ir validuojame pagal save
//     myJson.forEach((element) => {
//       console.log(element.first_name);
//     });
//     //
//   } catch (errro) {
//     //
//     console.log(errro);
//     // alert("Klaida");
//     return;
//   }
// }
// doRequest();
// // Fetch -> siuncia uzklausa y nurodyta URL ir grazina Response promisa,
// // Response promisas, turi metodus json, text, ir begale kitu.
// // zinant kad grazina json, galime issiparsinti JSONa
// // taip pat async funkcija, reikia parsinti jsona su awaitu.


// // -------------------- uzduotis ---------------------
const renderUserCard = (user) => {
  const img = document.createElement('img');
  img.src = user.picture.large;
  img.alt = `${user.name.first} profile picture`;

  const intro = document.createElement('h4');
  intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;

  const contacts = document.createElement('h5');
  contacts.innerText = user.email;

  const card = document.createElement('div');
  card.append(img, intro, contacts);
  document.body.append(card);
};

const fetchRandomUser = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if (response.ok) {
      const data = await response.json();
      renderUserCard(data.results[0]);
    }
  } catch(error) {
    console.error(error);
  }
};

fetchRandomUser();
