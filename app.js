// // lecture 4 Practice
// My hometown is Chirchiq. It is in Tashkent region. 
// It is a small and beautiful place.
//  The air is clean and fresh. 
// The place is quiet and calm.
//  I can see mountains. It is a very beautiful view. 
// There are parks, art centers, and markets. 
// There are also good places to relax.
//  I love my hometown very much because it is peaceful and people are friendly.

// Mening tug‘ilgan shahrim Chirchiq . U Toshkent viloyatida joylashgan.
// U kichik va chiroyli joy.
// Havosi toza va musaffo.
// Bu joy tinch va sokin.
// Men tog‘larni ko‘ra olaman. Bu juda chiroyli manzara.
// U yerda parklar, san’at markazlari va bozorlar bor.
// Dam olish uchun ham yaxshi joylar bor.
// Men o‘z shahrimni juda yaxshi ko‘raman, chunki u tinch va odamlari do‘stona.

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

