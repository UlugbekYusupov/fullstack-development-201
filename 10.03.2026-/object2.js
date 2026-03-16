/*
person <- Is object name
firstname, lastname, age <- is properties
object ->let object_name {
     key: value <- property
}

object is mutable 
object is reference-based
object allow dynamic properties
*/
// 1. Object literal
let car = {
     brand: "Tesla",
     model: "Model S",
     year: 2024,
     start: function (){
          console.log("Car is starting...")
     }
};

// 2. Using new Object
let person = new Object();
person.name = "Alice";
person.age = 25;
person.greet = function (){
     return `Hello, my name is ${this.name}`
};

//3. Factory Function
function createPerson(name, age){
     return {
          name,
          age,
          greet(){
               return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`
          }
     };
}

let person1 = createPerson("Alice", 25);
let person2 = createPerson("Bob", 30);

//4. Constructor Function
function Person(name, age) {
     this.name = name
     this.age = age
     this.greet = function() {
          return `Constructor Function: Hi, I'm ${this.name}, and I'm ${this.age} years old.`
     };
}

person1 = new Person("Alice", 25)
person2 = new Person("Bob", 30)

//5. Using Object Create (prototype)
let animal = {
     type: "Mammal",
     makeSound() {
          console.log("Some generic animal sound");
     }
};

let dog = Object.create(animal)
dog.breed = "Golden retriever"

//6. Using ES6 class
class PersonClass {
     constructor(name, age) {
          this.name = name
          this.age = age
     }

     greet(){
          return `Hello, my name is ${this.name}`
     }
}

person1 = new PersonClass("Alice", 25)

//7. Singleton Object
const config = Object.freeze({
     theme: "dark",
     version: "1.0.0"
});