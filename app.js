
let numbers=20
let juft=0;
let toq =0;
for (let i = 1; i<=numbers; i++){
  if (i%2==0){
      juft++;
  }
  else{
      toq++;
  }
}
console.log ("juft sonlar: ", juft, "-ta" );
console.log("toq sonlar: ", toq ,"-ta");


let son=1234;
// let son = number(prompt("soni kriting : "));
let teskari= 0;
while (son>0){
  let oxirgiraqam= son%10;
  teskari= teskari*10+oxirgiraqam
  son=Math.floor(son/10);
}
console.log("TESKARI SON : " , teskari);


let raqamlar = 12314;
let kotasi = 0;
while (raqamlar > 0) {
  let kota = raqamlar % 10;
  if (kota > kotasi) {
    kotasi = kota;
  } 
  raqamlar = Math.floor(raqamlar / 10);
}
console.log("kota raqam:", kotasi);


number=3345
// let number = Number(prompt("Son kiriting:"));
let sum = 0;
while (number > 0) {
    let lastDigit = number % 10;
    sum = sum + lastDigit;
    number = Math.floor(number / 10);
}
console.log("Raqamlar yig‘indisi:", sum);


num=4253
// let num = Number(prompt("Son kiriting:"));
let count = 0;
if (num === 0) {
    count = 1;
} else {
    while (num > 0) {
        count = count + 1;
        num = Math.floor(num / 10);
    }
}
console.log("Raqamlar soni:", count);













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

