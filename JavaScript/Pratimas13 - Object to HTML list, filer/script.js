// Masyva atvaizduoti ekrane kaip list'a.

const persons = [   

{ name: 'Alice', surname: 'Johnson', age: 32, gender: 'female' },
{ name: 'Bob', surname: 'Smith', age: 45, gender: 'male' },
{ name: 'Cathy', surname: 'Brown', age: 28, gender: 'female' },
{ name: 'David', surname: 'Miller', age: 39, gender: 'male' },
{ name: 'Eva', surname: 'Garcia', age: 24, gender: 'female' },
{ name: 'Frank', surname: 'Martinez', age: 50, gender: 'male' },
{ name: 'Grace', surname: 'Rodriguez', age: 35, gender: 'female' },
{ name: 'Henry', surname: 'Perez', age: 42, gender: 'male' },
{ name: 'Isabella', surname: 'Wilson', age: 29, gender: 'female' },
{ name: 'Jack', surname: 'Taylor', age: 36, gender: 'male' },
{ name: 'Katie', surname: 'Anderson', age: 27, gender: 'female' },
{ name: 'Leo', surname: 'Thomas', age: 47, gender: 'male' },
{ name: 'Mia', surname: 'Jackson', age: 31, gender: 'female' },
{ name: 'Nathan', surname: 'White', age: 40, gender: 'male' },
{ name: 'Olivia', surname: 'Harris', age: 22, gender: 'female' },
{ name: 'Paul', surname: 'Martin', age: 38, gender: 'male' },
{ name: 'Quinn', surname: 'Thompson', age: 25, gender: 'female' },
{ name: 'Robert', surname: 'Gonzalez', age: 44, gender: 'male' },
{ name: 'Sophia', surname: 'Lee', age: 30, gender: 'female' }, 
{ name: 'Tom', surname: 'Hernandez', age: 41, gender: 'male' },

];


function peopleList() {

    for(i = 0; i < persons.length; i++) {

    const person = persons[i];
    let createListElements = document.createElement("li")

    createListElements.textContent = person.name + " " + person.surname + ", " + person.age + ", " + person.gender;
    document.querySelector("ul").appendChild(createListElements)

    // console.log(person)
    }
}

peopleList(persons);

