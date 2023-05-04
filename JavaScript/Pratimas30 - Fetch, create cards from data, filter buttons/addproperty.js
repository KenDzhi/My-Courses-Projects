const dataToPost = {};



document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", postData);

  function postData(event) {
    event.preventDefault();

    const image = document.getElementById("imageInput").value;
    console.log(image)

    const price = document.getElementById("priceInput").value;
    console.log(price)

    const description = document.getElementById("descriptionInput").value;
    console.log(description)

    const city = document.getElementById("cityInput").value;
    console.log(city)

    const dataToPost = { image: image, city: city, price: price, description: description };
    console.log(dataToPost)

    fetch("https://robust-safe-crafter.glitch.me/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToPost),
    })
      .then((response) => response.json())
      .then((data) =>
        data.msg
          ? console.log("Duomenys sekmingai issaugoti") || window.location.replace("http://127.0.0.1:5500/JavaScript/Pratimas30%20-%20Fetch,%20create%20cards%20from%20data,%20filter%20buttons/index.html")
          : alert("Duomenu issaugoti nepavyko")
      );
  }
});