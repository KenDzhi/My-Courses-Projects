
// // Pirminė klasė su pradiniais metodais, kintamaisiais

// class Family {
//     constructor(initialFamily) {
//         console.log('Hi')
//         this.initialFamily = initialFamily    }
//     addPerson(name) {
//         this.initialFamily.push(name)
//     }
// }
// // Extendinta klasė (Sub) kuri prilipina fukncionalumo

// class JohnFamily extends Family {
//     constructor(initialFamily) {
//         super(initialFamily);
//     }
//     breakfest() {
//         console.log('Pusryciai')
//     }
// }
// // Extendinta klasė (Sub) kuri prilipina fukncionalumo

// class PetterFamily extends Family {
//     constructor(initialFamily) {
//         super(initialFamily)
//         this.familyName = 'Petter'    }
//     changeFamilyName(name) {
//         this.familyName = name    }
// }
// const family = new Family([])
// const myJohnFamily = new JohnFamily(['John'])
// const myPeeterFamily = new PetterFamily(['Peeter'])
// console.log(myJohnFamily)
// console.log(myPeeterFamily)

// const myFamily = new Family([ 'John' ])
// console.log(myFamily)
// myFamily.addPerson('Peeter')


// ------------------------------------------- uzduotis --------------------------------

// Sukurti klasę pavadinimu Vehicle, viduje turėtų turėti tokius propsus:
// make - Stringas
// model - Stringas
// year - Numeris
// Metodus 
// - start - console.log "[Year] [Make] [Model] užsikūrė"

// Sukurti extendintą (child) klasę - Car - su propsais:
// - numDoors - Numeris
// - numSeats - Numeris
// Metodus:
// - drive - console.log "[Year] [Make] [Model] pradėjo važiuoti"

// Sukurti dar vieną extendintą klasę - Motorcycle - su propsais:
// - numWheels - Numeris
// - hasHelmet - boolean
// Metodus:
// - ride - console.log "[Year] [Make] [Model] juda miškais"
// Sukurti Car ir Motorcycle instancus, iškviesti start(), drive(), ride();

// Užduotis apibendrinus 
//(Galite kurti ne nurodytą programą, tačiau kitokį principą, 
//svarbu kad būtų Vehicles klase ir dvi klasės kurios extendinasi iš vehicle)
// Ir iškvietus metodą start 
//(išsikviestų iš originalios klases) kiti metodai drive ir ride, išsikviestų iš sub klasių.

class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    startVehicle() {
        console.log(`${this.year} ${this.brand} ${this.model} užsikūrė`)
    }

}

class Car extends Vehicle{
    constructor(brand, model, year, doors, seats){
        super (brand, model, year)
        this.numDoors = doors;
        this.numSeats = seats;
    }
    driveCar(){
        console.log(`${this.year} ${this.brand} ${this.model} užspaudė gazą ir prasukus ratus išvažiavo`)
    }
}

class Motorcycle extends Vehicle{
    constructor(brand, model, year, wheels, hasHelmet){
        super (brand, model, year)
        this.wheels = wheels;
        this.hasHelmet = hasHelmet;
    }
    rideMotorcycle(){
        console.log(`${this.year} ${this.brand} ${this.model} išskrido šviesos greičiu`)
    }
}


const newCar = new Car('MB', 'CLS63 AMG', 2015, 5, 4)
console.log(newCar)
newCar.startVehicle()
newCar.driveCar()


const newMotorcycle = new Motorcycle('Suzuki', 'Hayabusa', 2022, 2, true)
console.log(newMotorcycle);
newMotorcycle.startVehicle();
newMotorcycle.rideMotorcycle()

// -----------------------------------------------------------------------------------

