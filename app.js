
// // lecture 7 object 
// // 1
// const students = [
//   { name: "Alice", scores: [80, 90, 100] },
//   { name: "Bob", scores: [50, 60, 70] },
//   { name: "Charlie", scores: [30, 40, 20] }
// ];
// function calculateAverage(scores) {
//   const total = scores.reduce((acc, score) => acc + score, 0);
//   return total / scores.length;
// }
// function hasPassed(average) {
//   return average >= 50;
// }
// function findTopPerformer(students) {
//   let topStudent = students[0];
//   let highestAverage = calculateAverage(topStudent.scores);

//   students.forEach(student => {
//     const avg = calculateAverage(student.scores);
//     if (avg > highestAverage) {
//       topStudent = student;
//       highestAverage = avg;
//     }
//   });

//   return topStudent.name;
// }
// students.forEach(student => {
//   const avg = calculateAverage(student.scores);
//   const passed = hasPassed(avg);
//   console.log(`${student.name}ning o'rtacha bahosi: ${avg}`);
//   console.log(`${student.name} ${passed ? 'o\'tgan' : 'o\'tmagan'}`);
// });
// const topPerformer = findTopPerformer(students);
// console.log(`Eng yaxshi natija ko'rsatgan talaba: ${topPerformer}`);


// // 2
// const cart = [
//   { id: 1, name: "Laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 100, quantity: 1 }
// ];
// function calculateTotal(cart) {
//   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// }
// function applyDiscount(total) {
//   return total > 100 ? total * 0.9 : total;
// }
// function findMostExpensiveItem(cart) {
//   return cart.reduce((maxItem, item) => {
//     const itemTotalPrice = item.price * item.quantity;
//     return itemTotalPrice > (maxItem.price * maxItem.quantity) ? item : maxItem;
//   });
// }

// const total = calculateTotal(cart);
// const totalAfterDiscount = applyDiscount(total);
// const mostExpensiveItem = findMostExpensiveItem(cart);

// console.log(`Total Price: $${totalAfterDiscount} (after discount)`);
// console.log(`Most expensive item: ${mostExpensiveItem.name} - $${mostExpensiveItem.price}`);


// // 3
// const products = [
//   { id: 1, name: "Laptop", price: 1200, stock: 10 },
//   { id: 2, name: "Phone", price: 700, stock: 15 },
// ];
// function addProduct(newProduct) {
//   products.push(newProduct);
// }
// function updateStock(productId, newStock) {
//   const product = products.find(item => item.id === productId);
//   if (product) {
//     product.stock = newStock;
//   } else {
//     console.log('Product not found');
//   }
// }
// function deleteProduct(productId) {
//   const index = products.findIndex(item => item.id === productId);
//   if (index !== -1) {
//     products.splice(index, 1);
//   } else {
//     console.log('Product not found');
//   }
// }
// function findProduct(productName) {
//   return products.find(item => item.name.toLowerCase() === productName.toLowerCase());
// }
// addProduct({ id: 3, name: "Tablet", price: 400, stock: 20 });
// updateStock(1, 12);
// deleteProduct(2);
// const foundProduct = findProduct("Laptop");
// console.log(foundProduct);
// console.log(products);


// // 4
// const posts = [
//   { author: "Alice", likes: 100, comments: 20, shares: 5, commentsDetails: [{ user: "John", message: "Great post!" }] },
//   { author: "Bob", likes: 200, comments: 50, shares: 10, commentsDetails: [{ user: "Alice", message: "Interesting post!" }] }
// ];
// function findMostLikedPost(posts) {
//   return posts.reduce((mostLiked, post) => {
//     return post.likes > mostLiked.likes ? post : mostLiked;
//   });
// }
// function calculateTotalEngagement(posts) {
//   return posts.reduce((total, post) => {
//     return total + post.likes + post.comments + post.shares;
//   }, 0);
// }
// const mostLikedPost = findMostLikedPost(posts);
// console.log("Most liked post:", mostLikedPost);
// const totalEngagement = calculateTotalEngagement(posts);
// console.log("Total engagement:", totalEngagement);
// posts.forEach(post => {
//   console.log(`${post.author}'s comments:`);
//   post.commentsDetails.forEach(comment => {
//     console.log(`User: ${comment.user}, Message: ${comment.message}`);
//   });
// });


// // 5
// const teams = [
//   { name: "Team A", wins: 5, losses: 2, points: 15, goalsScored: 20, goalsConceded: 10 },
//   { name: "Team B", wins: 6, losses: 1, points: 18, goalsScored: 25, goalsConceded: 12 },
// ];
// function sortTeamsByRanking(teams) {
//   return teams.sort((a, b) => b.points - a.points); // Eng ko'p ochkoga ega jamoalar yuqorida bo'ladi
// }
// function findBestPerformingTeam(teams) {
//   return teams.reduce((bestTeam, team) => {
//     return team.points > bestTeam.points ? team : bestTeam;
//   });
// }
// const sortedTeams = sortTeamsByRanking(teams);
// console.log("Sorted Teams:", sortedTeams);
// const bestTeam = findBestPerformingTeam(teams);
// console.log("Best Performing Team:", bestTeam);
// teams.forEach(team => {
//   console.log(`${team.name}: Wins: ${team.wins}, Losses: ${team.losses}, Points: ${team.points}, Goals Scored: ${team.goalsScored}, Goals Conceded: ${team.goalsConceded}`);
// });


// // 6
// const inventory = [
//   { itemName: "Laptop", category: "Electronics", stock: 5 },
//   { itemName: "Phone", category: "Electronics", stock: 10 },
//   { itemName: "Table", category: "Furniture", stock: 2 },
//   { itemName: "Chair", category: "Furniture", stock: 7 }
// ];
// function totalStockByCategory(category) {
//   return inventory
//     .filter((item) => item.category === category)
//     .reduce((sum, item) => sum + item.stock, 0);
// }
// function alertLowStock(threshold = 5) {
//   inventory.forEach(item => {
//     if (item.stock <= threshold) {
//       console.log(`ALERT: Low stock for ${item.itemName} in ${item.category}. Stock: ${item.stock}`);
//     }
//   });
// }
// const electronicsStock = totalStockByCategory("Electronics");
// console.log("Total stock in Electronics:", electronicsStock);
// alertLowStock(5);




























// // lecture 6 practice
// // 1
// function first(arr, n) {
//     if (arr == null) return void 0;
//     if (n == null) return arr[0];
//     if (n < 0) return [];
//     return arr.slice(0, n);
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));


// // 2
// function last(arr, n) {
//     if (arr == null) return void 0;
//     if (n == null) return arr[arr.length - 1];
//     return arr.slice(Math.max(arr.length - n, 0));
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// // 3
// var myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join());
// console.log(myColor.join(","));
// console.log(myColor.join("+"));

// // 4
// var num = "025468";
// var result = num.split("").join("-");
// console.log(result);

// // 5
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// arr1.sort(function(a, b){
//     return a - b;
// });
// console.log(arr1);

// // 6
// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var count = {};
// var maxItem;
// var maxCount = 0;
// for (var i = 0; i < arr1.length; i++) {
//     var item = arr1[i];
//     count[item] = (count[item] || 0) + 1;

//     if (count[item] > maxCount) {
//         maxCount = count[item];
//         maxItem = item;
//     }
// }
// console.log(maxItem + " (" + maxCount + " times)");

// // 7
// function swapCase(str) {
//     var result = "";

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             result += str[i].toLowerCase();
//         } else {
//             result += str[i].toUpperCase();
//         }
//     }

//     return result;
// }
// console.log(swapCase("The Quick Brown Fox"));

// // 8
// var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// var o = ["th","st","nd","rd"];
// for (var i = 0; i < color.length; i++) {
//     var ordinal;
//     if (i == 0) ordinal = 1 + o[1];
//     else if (i == 1) ordinal = 2 + o[2];
//     else if (i == 2) ordinal = 3 + o[3];
//     else ordinal = (i + 1) + o[0];
//     console.log(ordinal + " choice is " + color[i]);
// }

// // 9
// function sumArrays(a1, a2) {
//     var result = [];
//     var maxLength = Math.max(a1.length, a2.length);
//     for (var i = 0; i < maxLength; i++) {
//         var val1 = a1[i] || 0;
//         var val2 = a2[i] || 0;
//         result.push(val1 + val2);
//     }
//     return result;
// }
// var array1 = [1,0,2,3,4];
// var array2 = [3,5,6,7,8,13];
// console.log(sumArrays(array1, array2));































// // lecture 5 Practice
// // 1
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// const greet = function(name) {
//   return "Hello, " + name + "!";
// };

// const greet = (name) => {
//   return "Hello, " + name + "!";
// };

// const greet = name => "Hello, " + name + "!";

// function greet(name) {
//   return `Hello, ${name}!`;
// }



// // 2
// function isPrime(n) {

//   if (n <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {

//     if (n % i === 0) {
//       return false;
//     }

//   }

//   return true;
// }


// // 3
// function countDigits(n) {
//   return n.toString().length;
// }


// // 4
// function isPalindrome(n) {

//   let original = n;
//   let reversed = 0;

//   while (n > 0) {

//     let digit = n % 10;

//     reversed = reversed * 10 + digit;

//     n = Math.floor(n / 10);
//   }

//   return original === reversed;
// }


// // 5
// function isArmstrong(n) {

//   let original = n;

//   let digits = n.toString().length;

//   let sum = 0;

//   while (n > 0) {

//     let digit = n % 10;

//     sum += digit ** digits;

//     n = Math.floor(n / 10);
//   }

//   return sum === original;
// }


// // 6
// function createCounter(start) {

//   let count = start;

//   return {

//     increment: function() {
//       count++;
//     },

//     decrement: function() {
//       count--;
//     },

//     getCount: function() {
//       return count;
//     }

//   };

// }


// // 7
// function orderFood() {

//   let name = prompt("Ismingizni kiriting:");

//   let address = prompt("Manzilingizni kiriting:");

//   let food = prompt("Nima buyurtma qilmoqchisiz:");

//   console.log(
//     `Dear ${name}, your ordered food ${food} will be ready in 15 minutes and will be delivered to your address ${address}`
//   );

// }

// // 8
// function lazyAdder(a) {

//   return function(b) {

//     return a + b;

//   };

// }

// // 1
// console.log(greet("Ali"));
// console.log(greet("Vali"));
// // 2
// console.log(isPrime(7));
// console.log(isPrime(10));
// // 3
// console.log(countDigits(12345));
// console.log(countDigits(99));
// // 4
// console.log(isPalindrome(121));
// console.log(isPalindrome(123));
// // 5
// console.log(isArmstrong(153));
// console.log(isArmstrong(123));
// // 6
// const counter = createCounter(10);
// counter.getCount();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.getCount();
// // 7
// orderFood("Ali", "Tashkent", "Lavash");
// orderFood("Vali", "Samarqand", "Pizza");
// // 8
// const add5 = lazyAdder(5);
// console.log(add5(10));
// console.log(add5(20));
// const add100 = lazyAdder(100);
// console.log(add100(50));


// // lecture 5 Assignment
// // 1
// function calcTotal(cart) {
//   // nechta dona item borligini topamiz (qty lar yig‘indisi)
//   let totalItems = 0;
//   let totalPrice = 0;

//   for (let item of cart) {
//     totalItems += item.qty;
//     totalPrice += item.price * item.qty;
//   }

//   let discount = 0;
//   if (totalItems >= 5) discount = 0.20;
//   else if (totalItems >= 3) discount = 0.10;

//   let finalPrice = totalPrice * (1 - discount);

//   return {
//     totalItems,
//     totalPrice,
//     discountPercent: discount * 100,
//     finalPrice
//   };
// }
// // TEST
// const cart1 = [
//   { name: "Book", price: 50, qty: 1 },
//   { name: "Pen", price: 10, qty: 2 }
// ];
// const cart2 = [
//   { name: "Shoes", price: 100, qty: 2 },
//   { name: "Socks", price: 10, qty: 3 }
// ];
// console.log("Cart1:", calcTotal(cart1));
// console.log("Cart2:", calcTotal(cart2));


// // 2
// function checkPasswordStrength(password) {
//   let score = 0;

//   if (password.length >= 8) score++;
//   if (/[A-Z]/.test(password)) score++;
//   if (/[0-9]/.test(password)) score++;
//   if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score++;

//   if (score <= 1) return "Weak";
//   if (score <= 3) return "Medium";
//   return "Strong";
// }

// // TEST
// console.log(checkPasswordStrength("abc"));           // Weak
// console.log(checkPasswordStrength("abcdefgh"));      // Medium (faqat length)
// console.log(checkPasswordStrength("Abcdefgh"));      // Medium
// console.log(checkPasswordStrength("Abcdefg1"));      // Medium
// console.log(checkPasswordStrength("Abcdefg1!"));     // Strong

// // 3
// function atmWithdraw(amount) {
//   if (amount % 10 !== 0) {
//     return "Error: Amount must be multiple of 10!";
//   }

//   const bills = [100, 50, 20, 10];
//   let result = {};

//   for (let bill of bills) {
//     let count = Math.floor(amount / bill);
//     if (count > 0) {
//       result[`$${bill}`] = count;
//       amount = amount % bill;
//     }
//   }

//   return result;
// }

// // TEST
// console.log(atmWithdraw(130)); // { '$100': 1, '$20': 1, '$10': 1 }
// console.log(atmWithdraw(280)); // { '$100': 2, '$50': 1, '$20': 1, '$10': 1 }
// console.log(atmWithdraw(125)); // Error

// // 4
// function trafficLight() {

//   console.log("Red");

//   setTimeout(() => {

//     console.log("Green");

//     setTimeout(() => {

//       console.log("Yellow");

//       setTimeout(() => {

//         trafficLight();

//       }, 2000);

//     }, 3000);

//   }, 5000);

// }
// trafficLight();

// // 5
// function checkPassword(password) {
//   let score = 0;
//   if (password.length >= 8) score++;
//   if (/[A-Z]/.test(password)) score++;
//   if (/[0-9]/.test(password)) score++;
//   if (/[!@#$%^&*]/.test(password)) score++;
//   if (score <= 1) return "Weak";
//   if (score <= 3) return "Medium";
//   return "Strong";
// }
// console.log(checkPassword("abc"));
// // Weak
// console.log(checkPassword("abcdefgh"));
// // Medium
// console.log(checkPassword("Abcdefgh"));
// // Medium
// console.log(checkPassword("Abcdefg1"));
// // Medium
// console.log(checkPassword("Abcdefg1!"));
// // Strong

// // 6
// function bankAccount(initialBalance = 0) {
//   let balance = initialBalance; // PRIVATE (tashqaridan ko‘rinmaydi)

//   return {
//     deposit(amount) {
//       if (amount <= 0) return "Xato: deposit 0 dan katta bo‘lsin!";
//       balance += amount;
//       return `Deposit qilindi: $${amount}. Balans: $${balance}`;
//     },

//     withdraw(amount) {
//       if (amount <= 0) return "Xato: yechish 0 dan katta bo‘lsin!";
//       if (amount > balance) return "Xato: mablag' yetarli emas!";
//       balance -= amount;
//       return `Yechildi: $${amount}. Balans: $${balance}`;
//     },

//     viewBalance() {
//       return `Hozirgi balans: $${balance}`;
//     }
//   };
// }

// const acc = bankAccount(100);
// console.log(acc.viewBalance());       // 100
// console.log(acc.deposit(50));         // 150
// console.log(acc.withdraw(30));        // 120
// console.log(acc.withdraw(500));       // error
// console.log(acc.viewBalance());       // 120

// // 7
// function createUserRole(role) {
//   const permissions = {
//     admin: ["add", "edit", "delete", "view"],
//     editor: ["edit", "view"],
//     viewer: ["view"]
//   };

//   return {
//     role,
//     can(action) {
//       if (!permissions[role]) return false;
//       return permissions[role].includes(action);
//     },
//     do(action) {
//       if (this.can(action)) return ` ${role} -> "${action}" qilish mumkin`;
//       return ` ${role} -> "${action}" qilish mumkin emas`;
//     }
//   };
// }
// const adminUser = createUserRole("admin");
// const editorUser = createUserRole("editor");
// const viewerUser = createUserRole("viewer");

// console.log(adminUser.do("add"));     //
// console.log(adminUser.do("delete"));  //

// console.log(editorUser.do("add"));    //
// console.log(editorUser.do("edit"));   //

// console.log(viewerUser.do("view"));   //
// console.log(viewerUser.do("edit"));   //

// // 8
// function taxCalculator(income) {
//   if (income < 0) return "Xato: income manfiy bo‘lmaydi!";

//   let taxRate = 0;

//   if (income < 10000) taxRate = 0;
//   else if (income < 50000) taxRate = 0.10;
//   else taxRate = 0.20;

//   let tax = income * taxRate;
//   let afterTax = income - tax;

//   return {
//     income,
//     taxRate: taxRate * 100 + "%",
//     tax,
//     afterTax
//   };
// }
// console.log(taxCalculator(9000));   // 0% tax
// console.log(taxCalculator(20000));  // 10% tax
// console.log(taxCalculator(70000));  // 20% tax

// // Lecture Bonus
// // 1
// function debounce(fn, delay) {
//   let timerId = null; // closure ichida saqlanadi

//   return function (...args) {
//     clearTimeout(timerId);

//     timerId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// const debouncedLog = debounce((msg) => {
//   console.log("DEBOUNCE:", msg, "time:", new Date().toLocaleTimeString());
// }, 1000);
// debouncedLog("A");
// debouncedLog("B");
// debouncedLog("C");

// // 2
// function throttle(fn, interval) {
//   let lastTime = 0;
//   let timerId = null;
//   return function (...args) {
//     const now = Date.now();
//     const remaining = interval - (now - lastTime);
//     if (remaining <= 0) {
//       if (timerId) {
//         clearTimeout(timerId);
//         timerId = null;
//       }
//       lastTime = now;
//       fn.apply(this, args);
//     } else if (!timerId) {
//       timerId = setTimeout(() => {
//         lastTime = Date.now();
//         timerId = null;
//         fn.apply(this, args);
//       }, remaining);
//     }
//   };
// }
// const throttledLog = throttle((msg) => {
//   console.log("THROTTLE:", msg, "time:", new Date().toLocaleTimeString());
// }, 2000);
// throttledLog("1");
// throttledLog("2");
// throttledLog("3");

// // 3
// function taskScheduler() {
//   let timers = [];
//   return {
//     schedule(task, delay) {
//       const id = setTimeout(() => {
//         task();
//         timers = timers.filter((t) => t !== id);
//       }, delay);
//       timers.push(id);
//       return id;
//     },
//     cancelAll() {
//       for (const id of timers) {
//         clearTimeout(id);
//       }
//       timers = [];
//       console.log(" Hamma tasklar bekor qilindi!");
//     }
//   };
// }
// const scheduler = taskScheduler();
// scheduler.schedule(() => console.log("Task 1 (1s)"), 1000);
// scheduler.schedule(() => console.log("Task 2 (3s)"), 3000);
// scheduler.schedule(() => console.log("Task 3 (5s)"), 5000);
// setTimeout(() => {
//   scheduler.cancelAll(); // Task 2 va Task 3 ishlamay qoladi
// }, 2000);






























// // lecture 4 Practice
// 1
// let a = 10;
// let b = 5;
// if (a > b) {
//     console.log("Eng katta son: " + a);
// } else {
//     console.log("Eng katta son: " + b);
// }

// 2
// let x = 3;
// let y = -7;
// let z = 2;
// let product = x * y * z;
// if (product > 0) {
//     alert("Ishora +");
// } else {
//     alert("Ishora -");
// }

// 3
// let a = 0;
// let b = -1;
// let c = 4;
// let numbers = [a, b, c];
// numbers.sort(function(x, y) {
//     return y - x;
// });
// alert(numbers);

// 4
// for (let i = 0; i <= 15; i++) {

//     if (i % 2 == 0) {
//         console.log(i + " juft son");
//     } else {
//         console.log(i + " toq son");
//     }
// }

// 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// 6
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

// 7
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

















// // lecture 4
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



// for (const element in values) {
//   console.log(element);
// }










// // lecture 3
// let numbers=20
// let juft=0;
// let toq =0;
// for (let i = 1; i<=numbers; i++){
//   if (i%2==0){
//       juft++;
//   }
//   else{
//       toq++;
//   }
// }
// console.log ("juft sonlar: ", juft, "-ta" );
// console.log("toq sonlar: ", toq ,"-ta");


// let son=1234;
// // let son = number(prompt("soni kriting : "));
// let teskari= 0;
// while (son>0){
//   let oxirgiraqam= son%10;
//   teskari= teskari*10+oxirgiraqam
//   son=Math.floor(son/10);
// }
// console.log("TESKARI SON : " , teskari);


// let raqamlar = 12314;
// let kotasi = 0;
// while (raqamlar > 0) {
//   let kota = raqamlar % 10;
//   if (kota > kotasi) {
//     kotasi = kota;
//   }
//   raqamlar = Math.floor(raqamlar / 10);
// }
// console.log("kota raqam:", kotasi);


// number=3345
// // let number = Number(prompt("Son kiriting:"));
// let sum = 0;
// while (number > 0) {
//     let lastDigit = number % 10;
//     sum = sum + lastDigit;
//     number = Math.floor(number / 10);
// }
// console.log("Raqamlar yig‘indisi:", sum);


// num=4253
// // let num = Number(prompt("Son kiriting:"));
// let count = 0;
// if (num === 0) {
//     count = 1;
// } else {
//     while (num > 0) {
//         count = count + 1;
//         num = Math.floor(num / 10);
//     }
// }
// console.log("Raqamlar soni:", count);












// // lecture 2
// // type coercion Mystery
// console.log("5"+ 5);
// console.log("5"- 5);
// console.log("5"*"2");
// console.log("10"/2);
// console.log(5+true);
// console.log("10"-true);
// console.log("5"+true);
// console.log(5+null);
// console.log(5+undefined);



// // Type Conversion Practice
// let natija1=Number("200")+50;
// console.log(natija1);//250
// let matn = String(25) + " years old";
// console.log(matn);//25 years old
// console.log(Boolean("false"));//true
// console.log("10"- true)//9



// // Temperature Converter
// const celsius = 25;
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log("Selsiy:", celsius + "C");
// console.log("Farenhayt:", fahrenheit + "°F");
// //Agar const qiymatini o'zgartirmoqchi bo'lsa
// // celsius = 30; // Xatolik beradi: chunki uzgartirib bomidi



// // Budjet canculator
// let budget = Number(prompt("Umumiy budjetingizni kiriting:"));
// let exp1 = Number(prompt("1-xarajat miqdori:"));
// let exp2 = Number(prompt("2-xarajat miqdori:"));
// let exp3 = Number(prompt("3-xarajat miqdori:"));
// let totalExpenses = exp1 + exp2 + exp3;
// budget = budget - totalExpenses;
// if (budget < 0) {

//     console.log("Mablag' yetarli emas. Siz juda ko'p pul sarfladingiz!");
// }
// else{
//   console.log("Qolgan mablag': " + budget.toFixed(2) + " so'm");
// }











// // lecture 1
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

