// // cookies pasiekiam per dokumenta. Jie laikomi formatu "pavadinimas=reiksme;pavainimas2=reiskme2"
// // Taip pat galiu vienam cookie priskirti kitus dalykus kaip path, expires etc..
// // Expires automatiskai istrina sukakus laikui
// // Norint panaikinti cookie, reikia atnaujinti ta paty pavadinima atbuline data.document.cookie = "cookie2=;expires=Wed, 31 Oct 2024 08:50:17 GMT;"
// // Norint issivaliduoti ar susinormalizuoti cookius
// // reikia apsirasyti metoda,
// // splitinti per "; ", tada mapinti ir reducinti kad butu objektas array sarase.document.cookie.split('; ').map(ele => ele.split('='))

// // Local storage nusistato ir kinta siais metodais.localStorage.setItem('testas1', 'testoReiksme')
// localStorage.getItem('testas1')
// localStorage.removeItem('testas1')
// const todo = localStorage.getItem('todoInfo') ? JSON.parse(localStorage.getItem('todoInfo')) : []
// // localStorage.setItem('todoInfo', JSON.stringify([]))const todoFromStorage = JSON.parse(localStorage.getItem('todoInfo'))
// // Nustato lokaliai reiksme pagal rakta raktas = reiksmelocalStorage.setItem('Raktas', 'Reiksme')
// // IstrinalocalStorage.removeItem('Raktas')
// // Pasiimti reiksmelocalStorage.getItem('Raktas')
// // Issaugo tik tam sessione (uzdarius taba isnyksta)
// // Taciau veikia analogiskai kaip ir localStoragesessionStorage.getItem()
// sessionStorage.setItem(JSON.stringify([]))
// sessionStorage.removeItem()
// // Turint Javascript array ar objekta (JSON) mes galime konvertuoti jy y stringa
// // JSON Klase turi metoda stringify, JSON klase globali.
// // Parametre ydedame json objektaJSON.stringify(JSONAS)
// // Turint JSON objekta stringe, mes galime jy konvertuoti atgal y objekta JSON
// // Kitaip tariant - isparsintiJSON.parse(JSONSTRINGAS)

// ----------------------------------- Uzduotis ----------------------------------

// document.querySelector('form').addEventListener('submit', createCookie)

// function createCookie(event) {

//     const name = document.querySelector("input[type=text]").value;
//     event.preventDefault()

//     document.cookie = `name=${name}`

//     const cookieValue = getCookie('name')
//     console.log(cookieValue)

//     const createSpan = document.createElement('span')

//     if(name === cookieValue) {
//         document.querySelector('form').style.visibility='hidden'
//         document.getElementById('inputWithDelete').style.visibility='visible'

//         const createSpan = document.createElement('span')
//         document.getElementById('inputWithDelete').prepend(createSpan);
//         createSpan.textContent = name
//     }
// }

// const name = document.querySelector("input[type=text]").value;

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";

//   }

// document.getElementById('delete').addEventListener('click', deleteCookie)

// function deleteCookie(name) {

//     document.cookie = 'name' + "=" + name + ";" + "expires=Mon, 19 Jun 2021 16:20:12 GMT"
//     document.querySelector('form').style.visibility='visible'
//     document.getElementById('inputWithDelete').style.visibility='hidden'
//     document.querySelector('span').remove()
//   }

// ---------------------------------------------------------------------------------

