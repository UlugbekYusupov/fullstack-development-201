// console.log["5" + 5];
// console.log["5" - 5];
// console.log["5" + "2"];
// console.log["10" / 2];
// console.log[5 + true];
// console.log["10" * true];
// console.log["5" + true];
// console.log[5 - null];
// console.log[5 - undefined];



///////////////////////// 1-mashq //////////////////////////////

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



///////////////////////// 2-mashq ///////////////////////////////

// let n = Number(prompt("Son kiriting:"));
// let reversed = 0;

// while (n > 0) {
//     let lastDigit = n % 10;
//     reversed = reversed * 10 + lastDigit;  
//     n = Math.floor(n / 10);
// }

// console.log("Teskari son:", reversed);




/////////////////////////// 3-mashq //////////////////////////

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








///////////////////////////-24.02.2026-//////////////////////////







////////////////// 1-mash ////////////////////

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


//////////////////// 2-mashq ///////////////////

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



/////////////////////////// 3-mashq //////////////////////////

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }



/////////////////////////// 4-mashq //////////////////////////

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



/////////////////////////// 5-mashq //////////////////////////

// for (let num = 100; num <= 999; num++) {
//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;

//     let sumOfCubes = hundreds**3 + tens**3 + units**3;

//     if (sumOfCubes === num) {
//         console.log(num + " is an Armstrong number");
//     }
// }



/////////////////////////// 6-mashq //////////////////////////

// let students = ["David", "Vinoth", "Divya", "Ishitha", "Thomas"];
// let marks = [80, 77, 88, 95, 68];

// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
// }
// let average = total / marks.length;
// console.log("Average marks: " + average);

// // 2. Bahoni aniqlash
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
