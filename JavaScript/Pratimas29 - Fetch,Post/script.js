
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


// ------------------- uzduotis --------------------

const data = {};

const createTableSkeleton = () => {
  
    const brandName = document.createElement('th');
    brandName.innerText = 'Brand name';
  
    const modelName = document.createElement('th');
    modelName.innerText = 'Model name';
  
    const tr = document.createElement('tr');
    tr.append(brandName, modelName);
  
    const thead = document.createElement('thead');
    thead.append(tr);
  
    const table = document.createElement('table');
    table.append(thead, document.createElement('tbody'));
    document.body.append(table);
}

  async function fetchData() {
    try {
      let response = await fetch('https://olive-bead-glazer.glitch.me');
      if (response.ok) {
        data.cars = await response.json();
        addDataToTable(data.cars);
        // console.log(data.cars)
      }
    } catch (error) {
      console.error(error);
    }
  }

  function addDataToTable(data) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    data.forEach(car => {
      
      const brandName = document.createElement('td');
      brandName.innerText = car.brand;
  
      const modelName = document.createElement('td');
      modelName.innerText = car.model;
  
      const tr = document.createElement('tr')
      tr.append(brandName, modelName);
      tbody.append(tr);
    });
  }
  
  createTableSkeleton();
  fetchData();
  // console.log(data)


