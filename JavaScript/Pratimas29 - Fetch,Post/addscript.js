// // fetch priima du parametrus
// // fetch('URL' {}) URL ir objektą aprašymo, ką mūsų fetchas atliks

// {
//     method: "POST" || "GET" || "DELETE" //etc.. Nurodo kreipimosi tipą
//     headers: {   // Nusirodo objektas aprašyti mūsų užklausą
//     // Pavyzdžiui, nusirodo "Content-Type": "application/json"
//     // Nurodo, kad mūsų užklausos payload (Siuntinys / body)
//     // Bus validus JSON schemos
// },
//         body: JSON.stringify(...) // Nusirodo stringas bet kokio contento.
//         // Tai reiškia - kad mums reikia atsižvelgti ką mes nurodome content-type
//         // Jeigu nurodome json, tada galime pridėti stringą, kuri
//         // Būtų validi JSON - JSON.stringify(...)
//         // Turint content type text/html, galime nurodyti teksta arba HTML.
// }
//     // Dauguma aprašymų, būna validuojami serveryje (Kur kreipiamės)
//     // Tai turėtumėme vadovautis būtent, kaip aprašytas siuntimas
//     // Iš serverio pusės.
//     // Nusiųsti duomeinis į serverį, dažnai naudojamas POST
//     // REFFERENCES:
//     // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
//     // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type

const dataToPost = {};



document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", postData);

  function postData(event) {
    event.preventDefault();

    const brand = document.getElementById("brandName").value;
    // console.log(brand)

    const model = document.getElementById("modelName").value;
    // console.log(model)

    const dataToPost = { brand: brand, model: model };

    fetch("https://olive-bead-glazer.glitch.me", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToPost),
    })
      .then((response) => response.json())
      .then((data) =>
        data.msg
          ? console.log("Duomenys sekmingai issaugoti")
          : alert("Duomenu issaugoti nepavyko")
      );
  }
});
