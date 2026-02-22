console.log("5" + 5); // "55"
console.log("5" - 5); // 0
console.log("5" * "2"); // 10
console.log("10" / 2); // 5
console.log(5 + true); // 6
console.log("10" - true); // 9
console.log("5" + true); // "5true"
console.log(5 + null); // 5
console.log(5 + undefined); // NaN

let num = Number("200") + 50;
console.log(num); // 250

let age = String(25) + " years old";
console.log(age); // "25 years old"

console.log(Boolean("false"));
// true (chunki bo'sh bo'lmagan string har doim true)

console.log("10" - true);
// 9 (true = 1, 10 - 1 = 9)

const celsius = 25;

let fahrenheit = (celsius * 9) / 5 + 32;

console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);

let budget = Number(prompt("Enter your total budget:"));

let expense1 = Number(prompt("Enter expense 1:"));
let expense2 = Number(prompt("Enter expense 2:"));
let expense3 = Number(prompt("Enter expense 3:"));

let totalExpenses = expense1 + expense2 + expense3;
let remaining = budget - totalExpenses;

console.log("Remaining budget:", remaining.toFixed(2));

if (remaining < 0) {
  console.log("Warning: You have overspent!");
}
