// const students = [
//     {name: "Alice", scores: [80,90,100]},
//     {name: "Bob", scores: [50,60,70]},
//     {name: "Charlie", scores: [30,20,20]},
// ];

// let topstudent;
// let highaverage = 0;


// ////task 1
// students.forEach(student => {
//     let sum = student.scores.reduce((a,b) => a + b, 0);
//     let avg = sum/student.scores.length;

//     let status = avg >=50 ? "passed" : "Failed";
//     console.log(`${student.name} - avg: ${avg} - ${status}`);

//     if(avg > highaverage){
//         highaverage = avg
//         topstudent = student.name;
//     }
// })
// console.log(`High performing student: ${topstudent}`);


// // task 2
// const cart = [
//   { id: 1, name: "Laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 100, quantity: 1 }
// ];


// let total = 0;
// let most_exp = 0;
// let most_exp_name = "";
// cart.forEach(item => { 
//     total += item.price * item.quantity;
//     if(item.price * item.quantity > most_exp){
//         most_exp = item.price * item.quantity;
//         most_exp_name = item.name;
//     }
// })
// console.log(`Total Price: $${total} (after discount)`);


// // Expected Output: "Total Price: $990 (after discount)"


// //task 3
// let products = [
//   { id: 1, name: "Phone", price: 500, stock: 10 },
//   { id: 2, name: "Laptop", price: 1000, stock: 5 }
// ];

// // add product
// function addProduct(product) {
//   products.push(product);
// }

// // update stock
// function updateStock(id, newStock) {
//   const product = products.find(p => p.id === id);
//   if (product) {
//     product.stock = newStock;
//   }
// }

// // delete product
// function deleteProduct(id) {
//   products = products.filter(p => p.id !== id);
// }

// // find product
// function findProduct(name) {
//   return products.find(p => p.name === name);
// }

// // test
// addProduct({ id: 3, name: "Tablet", price: 300, stock: 7 });
// updateStock(1, 15);
// deleteProduct(2);

// console.log(products);
// console.log(findProduct("Tablet"));



// // task 4 
// const posts = [
//   { author: "Ali", likes: 100, comments: 20, shares: 10 },
//   { author: "Vali", likes: 150, comments: 40, shares: 20 },
//   { author: "Hasan", likes: 90, comments: 10, shares: 5 }
// ];

// // most liked post
// function mostLiked(posts) {
//   return posts.reduce((max, post) =>
//     post.likes > max.likes ? post : max
//   );
// }

// // total engagement
// function totalEngagement(posts) {
//   return posts.reduce((sum, post) =>
//     sum + post.likes + post.comments + post.shares
//   , 0);
// }

// console.log("Most liked:", mostLiked(posts));
// console.log("Total engagement:", totalEngagement(posts));



// /// task 5
// const teams = [
//   { name: "Team A", wins: 10, losses: 2, points: 30 },
//   { name: "Team B", wins: 8, losses: 4, points: 24 },
//   { name: "Team C", wins: 12, losses: 1, points: 36 }
// ];

// // sort teams
// function sortTeams() {
//   return teams.sort((a, b) => b.points - a.points);
// }

// // best team
// function bestTeam() {
//   return teams.reduce((best, team) =>
//     team.points > best.points ? team : best
//   );
// }

// console.log("Ranking:", sortTeams());
// console.log("Best team:", bestTeam());


// // task 6

// const inventory = [
//   { itemName: "Laptop", category: "Electronics", stock: 10 },
//   { itemName: "Mouse", category: "Electronics", stock: 30 },
//   { itemName: "Chair", category: "Furniture", stock: 5 }
// ];

// // total stock per category
// function totalStockByCategory() {
//   return inventory.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = 0;
//     }
//     acc[item.category] += item.stock;
//     return acc;
//   }, {});
// }

// // low stock alert
// function lowStock(threshold = 6) {
//   return inventory.filter(item => item.stock < threshold);
// }

// console.log("Stock per category:", totalStockByCategory());
// console.log("Low stock items:", lowStock());




