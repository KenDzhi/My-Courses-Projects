// Html h1, inputas, buttonas
// Html ul container
// Subcribe form event
// Create Todo element ir priskirti nauja ID (lengviausias budas sukurti unikalius ID newData().toString())
// Append child to ul 
// Implement Todo Element function - Complete and Delete

document.addEventListener('DOMContentLoaded', () => {

document.querySelector("form").addEventListener("submit", addToDoElement)

    let toDoElement = [];

    function addToDoElement (event) {
        
        event.preventDefault();
        
        const inputField = document.getElementById('textInput');
        const inputValue = inputField.value;
        const newID = new Date().getTime();

        toDoElement.push({name: inputValue, id: newID, completed: false});
        //ipushinamas objektas i toDoElement tuscia array

        console.log(toDoElement)
         //iskviesti .forEach funkcija, kuri priskirs unikalius ID kiekvienam pridetam elementui

        showTasks();
        //iskviesti funkcija, kuri sukurtus elementus perkeltu i html ir atvaizduotu

    }

    
    function showTasks() {

        const myUl = document.getElementById('toDoUl');
        myUl.innerHTML = ''; //tuscias Ul elementas
        
        toDoElement.forEach(displayFullToDo)

        function displayFullToDo (arr, i) {

            const createLi = document.createElement('li');
            createLi.textContent = arr.name + '  ';

            const createButton = document.createElement('button');
            createButton.textContent = 'Delete';
            createButton.setAttribute('id', i);
            createButton.addEventListener('click', deleteToDo);
            //sukuriamas naujas li elementas su button task'o istrynimui(priskiriamas ID button'ui)
            //pridedamas event listener, paspaudus iskviesti funkcija pasalinti elementui is list'o

            const createCheckbox = document.createElement('input');
            createButton.addEventListener('click', deleteToDo);
            createCheckbox.setAttribute('type', 'checkbox');
            createCheckbox.setAttribute('id', i);
            createButton.addEventListener('click', deleteToDo);
            // sukuriamas Checkbox'as ir jam priskiriamas ID
            //pridedamas event listener, pachekinus iskviesti funkcija pabraukti elementui is list'o

            myUl.append(createLi);
            createLi.textContent = arr.name;
            
            createLi.append(createCheckbox);
            createLi.append(createButton);
            //sukurti button ir checkbox priskiriami createLi elemento gale

        }
    }

        function deleteToDo(event) {

            event.preventDefault();

            const clickedDel = event.target;
            console.log(clickedDel)
            const getID = Number(clickedDel.getAtttribute('id'));
            console.log(getID)






        }
    






})