const myArray = ['1', '2', '3', '4'];
const myUl = document.createElement('ul');

document.addEventListener("DOMContentLoaded", () => {

    // const myDiv = document.createElement('div');
    // myDiv.textContent = 'Hi';
    // myDiv.classList.add('my-class');
    // document.body.append(myDiv)



    //document.append // Prideda i gala
    //document.prepend // prideda i pradzia

    //document.createElement // Sukuria elementa

    //HTMLelement.classList // CSS clasiu sarasas, kuris manipuliuojamas su .remove arba .add, .contains


    //HTMLelement.setAttribute();                         // suteikia atributa
    //HTMLelement.getAttribute();                         // pasiima atributa 
    //HTMLelement.removeAttribute();                      // pasalina atributa



    for (let i = 0; i < myArray.length; i++) {

        const myLi = document.createElement('li');
        myLi.textContent = myArray[i];
        myLi.setAttribute('index', i)
        myUl.append(myLi);

    }

    document.body.append(myUl);


    myUl.style.backgroundColor = 'red';


    myUl.classList.add('my-ul');   // klases sukurimas
    myUl.classList.remove('my-ul');


    myUl.setAttribute('name', 'my-ul-element'); // atributo sukurimas


    const image = document.createElement('img');   //sukuriam nauja img tag ir sukuriam atributa su nuoroda i img
    image.setAttribute('src', "https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640");
    document.body.append(image);



    const myForm = document.createElement('form'); 
    
    document.querySelector('.wrapper').prepend(myForm); 
    const myWrapper = document.querySelector('.wrapper'); // Sukuriame formos labely ir duodame jam textContent ir For 
    const nameLabel = document.createElement('label') 
    nameLabel.textContent = 'Name checkbox' 
    nameLabel.htmlFor = 'check-box' // Sukuirame checkboxa ir duodame jam atributus 
    const nameCheckbox = document.createElement('input') 
    nameCheckbox.type = 'checkbox'
    nameCheckbox.id = 'check-box' // Appendiname abu dalykus (pridedame y paty gala) myForm.append(nameLabel) myForm.append(nameCheckbox) })

})