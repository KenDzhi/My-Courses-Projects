const data = {};

//----------------------------- Duomenu pasiemimas
async function fetchData() {
  try {
    let response = await fetch("https://golden-whispering-show.glitch.me");
    if (response.ok) {
      data.products = await response.json();
      // console.log(data.properties)
      console.log(data)
      createPropertyCards(data.products);
    //   createFilters(data.products);
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

  data.forEach((product) => {
    
    const cardInside = document.createElement("div");
    cardInside.classList.add("card-body");

    const price = document.createElement("h5");
    //   console.log(property.price)
    price.classList.add("card-title");
    price.innerText = `$${product.price}`;

    const img = document.createElement("img");
    //   console.log(property.city)
    img.src = product.image;
    img.classList.add("imageProperties", "card-img-top")

    const title = document.createElement("p");
    //   console.log(property.description)
    title.classList.add("card-text");
    title.innerText = product.title;

    const button = document.createElement("button")
    button.innerText = "Ištrinti";

    const card = document.createElement("div");
    card.classList.add("card", "shadow");
    card.style.width = "18rem";
    card.append(cardInside);
    cardInside.append(img, title, price, button);
    cardsContainer.append(card);
  });
}