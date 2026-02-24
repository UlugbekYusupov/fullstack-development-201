// console.log("5" + 5); // "55"
// console.log("5" - 5); // 0
// console.log("5" * "2"); // 10
// console.log("10" / 2); // 5
// console.log(5 + true); // 6
// console.log("10" - true); // 9
// console.log("5" + true); // "5true"
// console.log(5 + null); // 5
// console.log(5 + undefined); // NaN

// let num = Number("200") + 50;
// console.log(num); // 250

// let age = String(25) + " years old";
// console.log(age); // "25 years old"

// console.log(Boolean("false"));
// // true (chunki bo'sh bo'lmagan string har doim true)

// console.log("10" - true);
// // 9 (true = 1, 10 - 1 = 9)

// const celsius = 25;

// let fahrenheit = (celsius * 9) / 5 + 32;

// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);

// let budget = Number(prompt("Enter your total budget:"));

// let expense1 = Number(prompt("Enter expense 1:"));
// let expense2 = Number(prompt("Enter expense 2:"));
// let expense3 = Number(prompt("Enter expense 3:"));

// let totalExpenses = expense1 + expense2 + expense3;
// let remaining = budget - totalExpenses;

// console.log("Remaining budget:", remaining.toFixed(2));

// if (remaining < 0) {
//   console.log("Warning: You have overspent!");
// }

let n = Number(prompt("n sonini kiriting:"));

let evenCount = Math.floor(n / 2);
let oddCount = n - evenCount;

console.log("Juft sonlar soni:", evenCount);
console.log("Toq sonlar soni:", oddCount);

let num = Number(prompt("Son kiriting:"));
let reversed = 0;

for (; num > 0; ) {
  let lastDigit = num % 10;
  reversed = reversed * 10 + lastDigit;
  num = Math.floor(num / 10);
}

console.log("Teskari son:", reversed);

let number = Number(prompt("Son kiriting:"));
let maxDigit = 0;

for (; number > 0; ) {
  let digit = number % 10;

  if (digit > maxDigit) {
    maxDigit = digit;
  }

  number = Math.floor(number / 10);
}

console.log("Eng katta raqam:", maxDigit);
