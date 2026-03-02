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









// 24.02.2026
//  Mavzu: Control Structure


// 1-mashq

// let a = 3;
// let b = -7;
// let c = 2;

// let product = a * b * c;

// if (product > 0) {
//     alert("The sign is +");
// } else if (product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The product is 0");
// }


// 2-mashq

// let a = 0;
// let b = -1;
// let c = 4;

// let largest, middle, smallest;

// if (a >= b && a >= c) {
//     largest = a;
//     if (b >= c) {
//         middle = b;
//         smallest = c;
//     } else {
//         middle = c;
//         smallest = b;
//     }
// } else if (b >= a && b >= c) {
//     largest = b;
//     if (a >= c) {
//         middle = a;
//         smallest = c;
//     } else {
//         middle = c;
//         smallest = a;
//     }
// } else {
//     largest = c;
//     if (a >= b) {
//         middle = a;
//         smallest = b;
//     } else {
//         middle = b;
//         smallest = a;
//     }
// }

// alert(largest + ", " + middle + ", " + smallest);



// 3-mashq

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }



// 4-mashq

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }



// 5-mashq

// for (let num = 100; num <= 999; num++) {
//     let sum = 0;
//     let temp = num;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += digit ** 3;
//         temp = Math.floor(temp / 10);
//     }

//     if (sum === num) {
//         console.log(num + " is an Armstrong number");
//     }
// }



// 6-mashq

// let students = ["David", "Vinoth", "Divya", "Ishitha", "Thomas"];
// let marks = [80, 77, 88, 95, 68];

// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
// }
// let average = total / marks.length;
// console.log("Average marks: " + average);

// let grade;
// if (average < 60) {
//     grade = "F";
// } else if (average < 70) {
//     grade = "D";
// } else if (average < 80) {
//     grade = "C";
// } else if (average < 90) {
//     grade = "B";
// } else {
//     grade = "A";
// }

// console.log("Grade: " + grade);





// 02.03.2026
// Functions in Javascript


// 1-misol 
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Odiljon"));


// 2-misol
// function isPrime(n) {
//   if (n <= 1) return false;
  
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
  
//   return true;
// }

// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(2));
// console.log(isPrime(1));




// 3-misol
// function countDigits(n) {
//   n = Math.abs(n);
  
//   if (n === 0) return 1;
  
//   let count = 0;
  
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
  
//   return count;
// }

// console.log(countDigits(12345));
// console.log(countDigits(-987));
// console.log(countDigits(0));


// 4-misol
// function isPalindrome(n) {
//   if (n < 0) return false;
  
//   let original = n;
//   let reversed = 0;
  
//   while (n > 0) {
//     let digit = n % 10;
//     reversed = reversed * 10 + digit; 
//     n = Math.floor(n / 10);
//   }
  
//   return original === reversed;
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(123));
// console.log(isPalindrome(1221));
// console.log(isPalindrome(-121));



// 5-misol
// function isArmstrong(n) {
//   if (n < 0) return false;
  
//   let original = n;
//   let digits = 0;
//   let temp = n;

//   if (n === 0) digits = 1;
//   while (temp > 0) {
//     digits++;
//     temp = Math.floor(temp / 10);
//   }

//   let sum = 0;
//   temp = n;
  
//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit ** digits;
//     temp = Math.floor(temp / 10);
//   }

//   return sum === original;
// }

// console.log(isArmstrong(153));
// console.log(isArmstrong(370));
// console.log(isArmstrong(371));
// console.log(isArmstrong(407));
// console.log(isArmstrong(123));




// 6-misol
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
//     }
//   };
// }

// const counter = createCounter(10);

// counter.increment();
// counter.increment();
// console.log(counter.getCount());

// counter.decrement();
// console.log(counter.getCount());



// 7-misol
// function lazyAdder(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// const add5 = lazyAdder(5);

// console.log(add5(10));
// console.log(add5(20));