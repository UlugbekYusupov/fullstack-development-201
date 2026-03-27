// console.log(username);
// var username = "Ulugbek";

// // console.log(age);
// // let age = 20;

// function greet(sayHello) {
//   sayHello();
// }

// greet(function () {
//   console.log("Bu callback");
// });

// Array.prototype.getValues = function () {
//   console.log("Bu Array prototypedan kelyapdi");
// };

// Array().getValues();

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let a = 0;
// while (a < 10) {
//   console.log(a);
//   a++;
// }

// let b = 1;
// do {
//   console.log(b);
//   b++;
// } while (b < 10);

// const user = {
//   username: "Ulugbek",
//   age: 30,
//   country: "Uzbekistan",
// };

// const values = Object.values(user);
// const keys = Object.keys(user);

// console.log(values);
// console.log(keys);

// for (const key in user) {
//   const element = user[key];
//   console.log(element);
// }

// for (const element of values) {
//   console.log(element);
// }

//1
// let a = 10;
// let b = 20;

// if (a > b) {
//   console.log(a + " is larger");
// } else if (b > a) {
//   console.log(b + " is larger");
// } else {
//   console.log("Both are equal");
// }

// //2
// let x = 3;
// let y = -7;
// let z = 2;

// let product = x * y * z;

// if (product > 0) {
//   alert("The sign is +");
// } else if (product < 0) {
//   alert("The sign is -");
// } else {
//   alert("The sign is 0");
// }

// //3
// let aa = 0;
// let bb = -1;
// let cc = 4;

// let arr = [aa, bb, cc];
// arr.sort(function (x, y) {
//   return y - x;
// });

// alert(arr.join(", "));

// //4
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }

// //5
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// //6
// for (let i = 100; i <= 999; i++) {
//   let num = i;
//   let sum = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     sum += digit ** 3;
//     num = Math.floor(num / 10);
//   }

//   if (sum === i) {
//     console.log(i);
//   }
// }

// //7
// let students = [
//   { name: "David", marks: 80 },
//   { name: "Vinoth", marks: 77 },
//   { name: "Divya", marks: 88 },
//   { name: "Ishitha", marks: 95 },
//   { name: "Thomas", marks: 68 },
// ];

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//   total += students[i].marks;
// }

// let average = total / students.length;
// console.log("Average marks: " + average);

// let grade;

// if (average < 60) {
//   grade = "F";
// } else if (average < 70) {
//   grade = "D";
// } else if (average < 80) {
//   grade = "C";
// } else if (average < 90) {
//   grade = "B";
// } else {
//   grade = "A";
// }

// console.log("Grade: " + grade);

// // 1
// function greet1(name) {
//   return "Hello, " + name + "!";
// }

// function greet2(name) {
//   return `Hello, ${name}!`;
// }

// const greet3 = (name) => {
//   return `Hello, ${name}!`;
// };

// const greet4 = (name) => `Hello, ${name}!`;

// const greet5 = function (name) {
//   return "Hello, " + name + "!";
// };

// // 2
// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }

// // 3
// function countDigits(n) {
//   return n.toString().length;
// }

// // 4
// function isPalindrome(n) {
//   let str = n.toString();
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// // 5
// function isArmstrong(n) {
//   let str = n.toString();
//   let power = str.length;
//   let sum = 0;

//   for (let digit of str) {
//     sum += Math.pow(Number(digit), power);
//   }

//   return sum === n;
// }

// // 6
// function createCounter(start) {
//   let count = start;

//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     getCount() {
//       return count;
//     },
//   };
// }

// // 7
// function orderFood(name, address, food) {
//   return `Dear ${name}, your ordered food ${food} will be ready in 15 minutes and will be delivered to your address ${address}.`;
// }

// // 8
// function lazyAdder(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const add5 = lazyAdder(5);
// console.log(add5(10)); // 15
// console.log(add5(20)); // 25

// // Assignment 1
// function calculateTotal(price, quantity) {
//   let total = price * quantity;

//   if (quantity >= 5) {
//     total *= 0.8;
//   } else if (quantity >= 3) {
//     total *= 0.9;
//   }

//   return total;
// }

// // Assignment 2
// function checkPassword(password) {
//   let strong =
//     password.length >= 8 &&
//     /[A-Z]/.test(password) &&
//     /[0-9]/.test(password) &&
//     /[!@#$%^&*]/.test(password);

//   if (strong) return "Strong";
//   if (password.length >= 6) return "Medium";
//   return "Weak";
// }

// // Assignment 3
// function atmWithdraw(amount) {
//   if (amount % 10 !== 0) {
//     return "Error: Amount must be multiple of 10";
//   }

//   let bills = [100, 50, 20, 10];
//   let result = {};

//   for (let bill of bills) {
//     result[bill] = Math.floor(amount / bill);
//     amount %= bill;
//   }

//   return result;
// }

// // Assignment 4
// function trafficLight() {
//   setTimeout(() => {
//     console.log("Red");
//   }, 0);

//   setTimeout(() => {
//     console.log("Green");
//   }, 5000);

//   setTimeout(() => {
//     console.log("Yellow");
//   }, 8000);
// }

// // Assignment 6
// function bankAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit(amount) {
//       balance += amount;
//     },
//     withdraw(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//       } else {
//         console.log("Insufficient balance");
//       }
//     },
//     viewBalance() {
//       return balance;
//     },
//   };
// }

// // Assignment 7
// function createUser(role) {
//   return {
//     role,
//     canAdd() {
//       return role === "admin";
//     },
//     canEdit() {
//       return role === "admin" || role === "editor";
//     },
//     canDelete() {
//       return role === "admin";
//     },
//     canView() {
//       return true;
//     },
//   };
// }

// // Assignment 8
// function calculateTax(income) {
//   if (income < 10000) return 0;
//   if (income <= 50000) return income * 0.1;
//   return income * 0.2;
// }

// // bonus 1
// function debounce(fn, delay) {
//   let timer;

//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// }

// // bonus 2
// function throttle(fn, interval) {
//   let lastTime = 0;

//   return function () {
//     let now = Date.now();
//     if (now - lastTime >= interval) {
//       lastTime = now;
//       fn();
//     }
//   };
// }

// // bonus 3
// function taskScheduler() {
//   let tasks = [];

//   return {
//     schedule(task, delay) {
//       let id = setTimeout(task, delay);
//       tasks.push(id);
//     },
//     cancelAll() {
//       tasks.forEach((id) => clearTimeout(id));
//       tasks = [];
//     },
//   };
// }

// // array 1

// function first(arr, n) {
//   if (arr.length === 0) return [];

//   if (n === undefined) {
//     return arr[0];
//   }

//   if (n < 0) return n;

//   return arr.slice(0, n);
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// // array 2

// function last(arr, n) {
//   if (n === undefined) {
//     return arr[arr.length - 1];
//   }

//   return arr.slice(-n);
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// // array 3

// let myColor = ["Red", "Green", "White", "Black"];

// let result = myColor.join(",");

// console.log(result);

// // array 4

// function insertDash(num) {
//   let str = num.toString();

//   return str.split("").join("-");
// }

// console.log(insertDash(25468));

// // array 5

// let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arr1.sort((a, b) => a - b);

// console.log(arr1);

// // aarray 6

// function mostFrequent(arr) {
//   let count = {};
//   let max = 0;
//   let item;

//   for (let value of arr) {
//     count[value] = (count[value] || 0) + 1;

//     if (count[value] > max) {
//       max = count[value];
//       item = value;
//     }
//   }

//   return item + " (" + max + " times)";
// }

// let arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// console.log(mostFrequent(arr2));

// // array 7

// function swapCase(str) {
//   let result = "";

//   for (let char of str) {
//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }

//   return result;
// }

// console.log(swapCase("The Quick Brown Fox"));

// object 1

// const students = [
//   { name: "Alice", scores: [80, 90, 100] },
//   { name: "Bob", scores: [50, 60, 70] },
//   { name: "Charlie", scores: [30, 40, 20] },
// ];

// function analyzeStudents(students) {
//   let topStudent = null;
//   let highestAvg = 0;

//   students.forEach((student) => {
//     let sum = student.scores.reduce((a, b) => a + b, 0);
//     let avg = sum / student.scores.length;

//     console.log(student.name, "average:", avg);

//     if (avg >= 50) {
//       console.log("Passed");
//     } else {
//       console.log("Failed");
//     }

//     if (avg > highestAvg) {
//       highestAvg = avg;
//       topStudent = student.name;
//     }
//   });

//   console.log(`${topStudent} has the highest average: ${highestAvg}`);
// }

// analyzeStudents(students);

// object 2

// const cart = [
//   { id: 1, name: "Laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 100, quantity: 1 },
// ];

// function analyzeCart(cart) {
//   let total = 0;
//   let expensive = cart[0];

//   cart.forEach((item) => {
//     total += item.price * item.quantity;

//     if (item.price > expensive.price) {
//       expensive = item;
//     }
//   });

//   if (total > 100) {
//     total *= 0.9;
//   }

//   console.log("Total price:", total);
//   console.log("Most expensive:", expensive.name);
// }

// analyzeCart(cart);

// // object 3

// let products = [
//   { id: 1, name: "Laptop", price: 1000, stock: 5 },
//   { id: 2, name: "Phone", price: 500, stock: 10 },
// ];

// function addProduct(product) {
//   products.push(product);
// }

// function updateStock(id, newStock) {
//   let product = products.find((p) => p.id === id);
//   if (product) {
//     product.stock = newStock;
//   }
// }

// function deleteProduct(id) {
//   products = products.filter((p) => p.id !== id);
// }

// function findProduct(name) {
//   return products.find((p) => p.name === name);
// }

// addProduct({ id: 3, name: "Tablet", price: 300, stock: 7 });
// updateStock(1, 8);

// console.log(findProduct("Phone"));

//kalkulyator
const display = document.getElementById("display");

function appendChar(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.toString().slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Xato";
    setTimeout(clearDisplay, 1500);
  }
}

// svetafor
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

let currentStep = 0;

function changeTrafficLight() {
  redLight.className = "circle";
  yellowLight.className = "circle";
  greenLight.className = "circle";

  if (currentStep === 0) {
    redLight.classList.add("active-red");
  } else if (currentStep === 1) {
    yellowLight.classList.add("active-yellow");
  } else if (currentStep === 2) {
    greenLight.classList.add("active-green");
  }

  currentStep++;
  if (currentStep > 2) {
    currentStep = 0;
  }
}

changeTrafficLight();

setInterval(changeTrafficLight, 2000);

const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;

  console.log("Ro'yxatdan o'tilmoqda: ", { username, email });
  alert("Muvaffaqiyatli ro'yxatdan o'tdingiz: " + username);

  signupForm.reset();
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;

  console.log("Tizimga kirilmoqda: ", email);
  alert("Xush kelibsiz, " + email);

  loginForm.reset();
});
