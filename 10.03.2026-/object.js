//1 способ создания объекта
let car = {
     brand: "Tesla",
     model: "Model Y",
     year: 2025,
     start: function () {
          console.log("1. Car is starting ...");
     }
};

console.log(car.start());

//2 способ создания объекта
let person = new Object()
person.name = "Alice"
person.age = 25

person.greet = function () {
     return `2. Hello, my name's ${this.name}`
}

console.log(person.greet())

//3 способ создания объекта
function createPerson(name, age){
     return {
          name: name,
          age: age,
          greet() {
              return `3. Hello, my name's ${this.name}`
          },
     };
}

//4
let person1 = createPerson("Sarvar", 88);
console.log(person1.greet());

function Person(name, age){
     this.name = name
     this.age = age
     this.greet = function() {
          return `4. hi my name is ${this.name} and I am ${this.age} years old`
     };
}

let person2 = new Person("Kentavr", 718)

console.log(person2.greet())

let animal = {
     type: "Mummals",
     makeSound() {
          console.log("Some generic is defined");
     }
}

let dog = Object.create(animal);

// class Person {
//      constructor(name, age){
//           this.name = name, 
//           this.age = age
//      }

//      greet(){
//           return `Hello my names ${this.name} and I'm ${this.age} years old`
//      }
// }

//Object Freeze. Qo'shih, yangilash mumkin emas, ilojisi yo'q
const config = Object.freeze({
     theme: "dark",
     version: "1.0.0"
});

config.theme = "light"
console.log(config.theme)

//Objects methods
let ret = Object.assign(dog, person2)
console.log(Object.keys(ret));

Object.seal(dog) //O'zgartirish mumkin emas, lekim modifikatsiya qilish mumkun! 
dog.type = "Sudralib yuruvchi"
console.log(dog.type);