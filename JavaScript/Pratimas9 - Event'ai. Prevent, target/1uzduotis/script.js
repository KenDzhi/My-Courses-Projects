document.addEventListener('DOMContentLoaded', () => {

  const price = 6;

  document.querySelector("form").addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {

    event.preventDefault()
    
    const age = document.getElementById("age").value;
    const finalPrice = document.querySelector("h1");

    if (age <= 16) {
        finalPrice.textContent = 'Bilieto kaina: ' + (price * 1/2) + ' Eur.';

    } else if (age >= 60) {
          finalPrice.textContent = 'Bilieto kaina: ' + (price *1/3) + ' Eur.';
          
      } else {
            finalPrice.textContent = 'Bilieto kaina: ' + price + ' Eur.';
        }
  }
})
