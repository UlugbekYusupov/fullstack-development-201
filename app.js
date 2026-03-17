// // // // console.log(username);
// // // // var username = "Ulugbek";

// // // // // console.log(age);
// // // // // let age = 20;

// // // // function greet(sayHello) {
// // // //   sayHello();
// // // // }

// // // // greet(function () {
// // // //   console.log("Bu callback");
// // // // });

// // // // Array.prototype.getValues = function () {
// // // //   console.log("Bu Array prototypedan kelyapdi");
// // // // };

// // // // Array().getValues();

// // // // for (let i = 1; i <= 10; i++) {
// // // //   console.log(i);
// // // // }

// // // // let a = 0;
// // // // while (a < 10) {
// // // //   console.log(a);
// // // //   a++;
// // // // }

// // // // let b = 1;
// // // // do {
// // // //   console.log(b);
// // // //   b++;
// // // // } while (b < 10);

// // // // const user = {
// // // //   username: "Ulugbek",
// // // //   age: 30,
// // // //   country: "Uzbekistan",
// // // // };

// // // // const values = Object.values(user);
// // // // const keys = Object.keys(user);

// // // // console.log(values);
// // // // console.log(keys);

// // // // for (const key in user) {
// // // //   const element = user[key];
// // // //   console.log(element);
// // // // }

// // // // for (const element in values) {
// // // //   console.log(element);
// // // // }

// // // // function arm(n, p){
// // // //   let s = 0
// // // //   let k = n
// // // //   while(k > 0){
// // // //     s += (k % 10) ** p
// // // //     k = parseInt(k / 10)
// // // //   }
// // // //   return s === n ? true : false
// // // // }

// // // // let n = prompt()
// // // // let p = n.length
// // // // n = parseInt(n)
// // // // console.log(arm(n, p) ? "Yes" : "No")

// // // // // seventh task

// // // // let students = {"David": 80, "Viboth" : 77, "Annurbek" : 95, "Aziz": 88, "Sherdil": 56}

// // // // for (const student in students){
// // // //   if(students[student] <= 60){
// // // //     console.log(`${student} is equal F`)
// // // //   }else if (students[student] <= 70){
// // // //     console.log(`${student} is equal D`)
// // // //   }else if (students[student] <= 80){
// // // //     console.log(`${student} is equal C`)
// // // //   }else if (students[student] <= 90){
// // // //     console.log(`${student} is equal B`)
// // // //   }else if (students[student] <= 100){
// // // //     console.log(`${student} is equal A`)
// // // //   }
// // // // }

// // // // function outer() {
// // // //   let firstname = "Mirzoulugbek";

// // // //   function inner() {
// // // //     const fullname = firstname + "Yusupov";
// // // //     console.log(fullname);
// // // //   }

// // // //   inner();
// // // // }

// // // // outer();

// // // // console.log(a);
// // // // var a = 10;

// // // // var a = 10;

// // // console.log([]);

// // // let car = {
// // //   brand: "Tesla",
// // //   model: "Model Y",
// // //   year: 2024,
// // //   start: function () {
// // //     console.log("Car is starting...");
// // //   },
// // // };

// // // car.start();

// // // let person = new Object();
// // // person.name = "Alice";
// // // person.age = 30;

// // // person.greet = function () {
// // //   return `Hello, my name is ${this.name}`;
// // // };

// // // console.log(person.greet());

// // // function createPerson(name, age) {
// // //   return {
// // //     name,
// // //     age,
// // //     greet() {
// // //       return `Hello, my name is ${this.name}`;
// // //     },
// // //   };
// // // }

// // // let person1 = createPerson("Ulugbek", 30);
// // // console.log(person1.greet());

// // // function Person(name, age) {
// // //   this.name = name;
// // //   this.age = age;
// // //   this.greet = function () {
// // //     return `hi my name is ${this.name} and i am ${this.age} years old`;
// // //   };
// // // }

// // // let person2 = new Person("Ulugbek", 40);

// // // console.log(person2.greet());

// // // let animal = {
// // //   type: "Mammals",
// // //   makeSound() {
// // //     console.log("Making sound");
// // //   },
// // // };

// // // let dog = Object.create(animal);

// // // // class Person {
// // // //   constructor(name, age) {
// // // //     ((this.name = name), (this.age = age));
// // // //   }
// // // //   greet() {
// // // //     return `Hello my name is ${this.name}`;
// // // //   }
// // // // }

// // // // let person3 = new Person("Ulugbe", 30);

// // // // person3.greet();

// // // const config = Object.freeze({
// // //   theme: "dark",
// // //   version: "1.0.0",
// // // });

// // // config.theme = "light";
// // // config.lang = "eng";

// // // Object.assign(dog, config);

// // // console.log(dog.theme);

// // // Object.seal(dog);

// // // dog.type = "sudralib yuruvchi";

// // // console.log(dog.type);

// // const cart = [
// //   { id: 1, name: "Laptop", price: 900, quantity: 1 },
// //   { id: 2, name: "Mouse", price: 50, quantity: 2 },
// //   { id: 3, name: "Keyboard", price: 100, quantity: 1 },
// // ];
// // let total = 0;
// // let mostExpensive = 0;
// // let mostExpensiveName = "";
// // cart.forEach((cartItem) => {
// //   if (cartItem.price * cartItem.quantity >= 100) {
// //     total += cartItem.price * cartItem.quantity * 0.9;
// //   } else {
// //     total += cartItem.price * cartItem.quantity;
// //   }

// //   if (cartItem.price > mostExpensive) {
// //     mostExpensive = cartItem.price;
// //     mostExpensiveName = cartItem.name;
// //   }
// // });

// // console.log(`total price: ${total}`);

// // console.log(`Most expensive item: ${mostExpensiveName}`);

// const p = document.createElement("p");
// p.innerHTML = "bu innerhtml orqali";
// p.textContent = "bu text content orqali";

// document.body.appendChild(p);

// const button = document.createElement("button");
// button.textContent = "Click me";
// button.style.color = "white";
// button.style.border = "none";
// button.style.padding = "10px 15px";
// button.style.backgroundColor = "red";
// button.style.borderRadius = "5px";
// button.style.cursor = "pointer";

// document.body.appendChild(button);

// button.addEventListener("click", function () {
//   p.classList.toggle("title");
// });

// let tasks = [
//   {
//     id: 1,
//     title: "Task1",
//     description: "Description 1",
//     status: "pending",
//   },
//   {
//     id: 2,
//     title: "Task2",
//     description: "Description 2",
//     status: "in progress",
//   },
//   {
//     id: 3,
//     title: "Task3",
//     description: "Description 3",
//     status: "completed",
//   },
// ];

// const taskContainer = document.createElement("div");

// tasks.map(function (task) {
//   const title = document.createElement("h4");
//   title.textContent = task.title;
//   const description = document.createElement("p");
//   description.textContent = task.description;
//   const status = document.createElement("p");
//   status.textContent = task.status;

//   const delbutton = document.createElement("button");
//   delbutton.textContent = "Delete";

//   delbutton.addEventListener("click", () => deleteTask(task.id));

//   const taskCard = document.createElement("div");
//   taskCard.classList.add("card");

//   taskCard.appendChild(title);
//   taskCard.appendChild(description);
//   taskCard.appendChild(status);
//   taskCard.appendChild(delbutton);

//   taskContainer.appendChild(taskCard);
// });

// function deleteTask(taskID) {
//   tasks = tasks.filter((task) => task.id !== taskID);
//   console.log(tasks);
// }

// document.body.appendChild(taskContainer);
