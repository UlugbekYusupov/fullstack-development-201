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


// -----------------------masalalar-----------------------
//Berilgan sonlarni toq va tuftlari nechta ekanligini aniqlovchi dastur tuzing. Masalan: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 sonlari uchun natija quyidagicha bo'ladi:




console.log(2, 3, 4, 5, 6, 7, 8, 9, 10);
var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenCount = 0;
var oddCount = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  } 
}
console.log("Toq sonlar soni: " + oddCount);
console.log("Tuf sonlar soni: " + evenCount);


