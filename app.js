///1
// function greet(name) {
//   return "Hello, " + name + "!";
// }
// const greet1 = function(name) {
//   return "Hello, " + name + "!";
// };
// const greet2 = (name) => {
//   return "Hello, " + name + "!";
// };
// const greet3 = name => "Hello, " + name + "!";
// const greet4 = name => `Hello, ${name}!`;
// console.log(greet("Alice"));
// console.log(greet1("Bob"));
///2
// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }
// console.log(isPrime(2));
///3
// function countDigits(n) {
//   n = Math.abs(n);
//   let count = 0;

//   do {
//     count++;
//     n = Math.floor(n / 10);
//   } while (n > 0);

//   return count;
// }
// console.log(countDigits(12345));
///4
// function isPalindrome(n) {
//   const str = n.toString();
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome(12321));
///5
// function isArmstrong(n) {
//   const digits = n.toString().split("");
//   const power = digits.length;

//   const sum = digits.reduce((acc, digit) => {
//     return acc + Math.pow(Number(digit), power);
//   }, 0);

//   return sum === n;
// }
// console.log(isArmstrong(153));
///6
// function createCounter(start = 0) {
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
//     }
//   };
// }
///7
// function once(fn) {
//   let called = false;
//   let result;

//   return function(...args) {
//     if (!called) {
//       called = true;
//       result = fn(...args);
//     }
//     return result;
//   };
// }
// function salom() {
//   console.log("Ishladi!");
//   return 42;
// }

// const birMarta = once(salom);
// console.log(birMarta()); 
// console.log(birMarta()); 
// console.log(birMarta());
///8
// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// const add5 = lazyAdder(5);

// console.log(add5(10)); 
// console.log(add5(20)); 