// Tursunboyev Odiljon uy ishi

// Exercise 1
console.log("5" + 5);
console.log("5" - 5);
console.log("5" * "2");
console.log("10" / 2);
console.log(5 + true);
console.log("15" - true);
console.log("5" + true);
console.log(5 + null);
console.log(5 + undefined);

// Exercise 2
const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;

console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);

// Exercise 3
let budget = 100;

let e1 = 40;
let e2 = 30;
let e3 = 50;

let remaining = budget - (e1 + e2 + e3);

console.log("Qolgan pul:", remaining.toFixed(2));

if (remaining < 0) {
  console.log("Siz byudjetdan oshib ketdingiz!");
}


// Exercise 4
console.log(!!"false" == !!"true");
console.log(0 || "JavaScript");
console.log(" " && 100);
console.log(null ?? "Fallback");
console.log(undefined ?? "Default Value");


// Exercise 5
let a = "42";
let b = "3.14";
let c = "hello";
let d = false;
let e = null;

let sum = a+b+d+e;

console.log(sum);