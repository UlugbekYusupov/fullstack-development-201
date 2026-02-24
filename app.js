// Tursunboyev Odiljon uy ishi

// Exercise 1
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / 2);
// console.log(5 + true);
// console.log("15" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// Exercise 2
// const celsius = 25;
// const fahrenheit = (celsius * 9 / 5) + 32;

// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);

// // Exercise 3
// let budget = 100;

// let e1 = 40;
// let e2 = 30;
// let e3 = 50;

// let remaining = budget - (e1 + e2 + e3);

// console.log("Qolgan pul:", remaining.toFixed(2));

// if (remaining < 0) {
//   console.log("Siz byudjetdan oshib ketdingiz!");
// } 
 

// Exercise 4
// console.log(!!"false" == !!"true");
// console.log(0 || "JavaScript");
// console.log(" " && 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");


// Exercise 5
// let a = "42";
// let b = "3.14";
// let c = "hello";
// let d = false;
// let e = null;

// let sum = a+b+d+e;

// console.log(sum);








// Sana 23.02.2026
// Mavzu: Javascript Datatypes


// 1-mash
// let n = 10;

// let juft = 0;
// let toq = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         juft++;
//     } else {
//         toq++;
//     }
// }

// console.log("Juft sonlar soni:", juft);
// console.log("Toq sonlar soni:", toq);


// 2-mashq
// let n = Number(prompt("Son kiriting:"));
// let reversed = 0;

// while (n > 0) {
//     let lastDigit = n % 10;
//     reversed = reversed * 10 + lastDigit;  
//     n = Math.floor(n / 10);
// }

// console.log("Teskari son:", reversed);


// 3-mashq 
// let n = Number(prompt("Son kiriting:"));
// let max = 0;

// while (n > 0) {
//     let d = n % 10;
    
//     if (d > max) {
//         max = d;
//     }
    
//     n = Math.floor(n / 10);
// }

// console.log(max);



// 4-mashq
// let n = Number(prompt("Son kiriting:"));
// let sum = 0;

// while (n > 0) {
//     let digit = n % 10;
//     sum = sum + digit;
//     n = Math.floor(n / 10);
// }

// console.log("Raqamlar yig‘indisi:", sum);


// 5-mashq
// let n = Number(prompt("Son kiriting:"));
// let count = 0;

// if (n === 0) {
//     count = 1;
// }

// while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
// }

// console.log("Raqamlar soni:", count);