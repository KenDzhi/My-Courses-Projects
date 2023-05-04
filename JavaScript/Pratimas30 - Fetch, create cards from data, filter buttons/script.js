const data = {};

//----------------------------- Duomenu pasiemimas
async function fetchData() {
  try {
    let response = await fetch("https://robust-safe-crafter.glitch.me/");
    if (response.ok) {
      data.properties = await response.json();
      // console.log(data.properties)
      createPropertyCards(data.properties);
      createFilters(data.properties);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// --------------- Korteliu su duomenimis sukurimas

function createPropertyCards(data) {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  data.forEach((property) => {
    const img = document.createElement("img");
    //   console.log(property.image)
    img.classList.add("card-img-top");
    img.src = property.image;

    const cardInside = document.createElement("div");
    cardInside.classList.add("card-body");

    const price = document.createElement("h5");
    //   console.log(property.price)
    price.classList.add("card-title");
    price.innerText = `$${property.price}`;

    const city = document.createElement("p");
    //   console.log(property.city)
    city.classList.add("lead");
    city.innerText = property.city;

    const description = document.createElement("p");
    //   console.log(property.description)
    description.classList.add("card-text");
    description.innerText = property.description;

    const card = document.createElement("div");
    card.classList.add("card", "shadow");
    card.style.width = "18rem";
    card.append(img, cardInside);
    cardInside.append(price, city, description);
    cardsContainer.append(card);
  });
}

// ----------------------Filtru sukurimas-----------------------------

function createFilters(data) {
  const filtersContainer = document.getElementById("filtersContainer");
  filtersContainer.innerHTML = " ";

  const filteredCities = [...new Set(data.map((property) => property.city))];
  // console.log(filteredCities)

  filteredCities.forEach((city) => {
    const cityFilter = document.createElement("button");
    cityFilter.classList.add("btn", "btn-outline-success");
    cityFilter.setAttribute("id", city);
    cityFilter.setAttribute("data-bs-toggle", "button");
    cityFilter.innerHTML = city;

    filtersContainer.append(cityFilter);
  });
}

// ----------------------- Filtravimo funkcija----------------

const activefilter = {};

function filterProperties(event) {
  activefilter[event.target.id] = !activefilter[event.target.id];

  const activefilters = Object.entries(activefilter).filter((entry) => entry[1] === true);

  if(activefilters.length === 0) {
    createPropertyCards(data.properties);
  } else {
    createPropertyCards(
        data.properties.filter((property) => activefilter[property.city])
      );
  }
  
}

document
  .getElementById("filtersContainer")
  .addEventListener("click", filterProperties);
