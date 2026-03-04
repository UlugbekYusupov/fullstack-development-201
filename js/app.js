// // //challenge 1

// // console.log(5 + "5")
// // console.log("5" - 10)
// // console.log("5" * "2")
// // console.log("10" / 2)

// // console.log(5 + true)
// // console.log("10" - true)
// // console.log("5" + true)
// // console.log(5 + null)
// // console.log(5 + undefined)

// // /// challange 2:

// // console.log(Number("100") + 50)
// // console.log(String(25) + " yes old")
// // console.log(Boolean("false"))
// // console.log("10" - true) // = 9


// // /// challange 3

// // const temp = "34C"
// // const F = (Number(temp)*(9/5) + 32)
// // console.log(temp)
// // console.log(F)
// // console.log(String(F) + "F")

// // ///challenge 4 

// // let budget = +prompt("Your budget: ")

// // const expens1 = prompt("Expens 1: ")
// // const expens2 = prompt("Expens 2: ")
// // const expens3 = prompt("Expens 3: ")

// // const totalExpens = Number(expens1) + Number(expens2) + Number(expens3)

// // if (totalExpens > budget){
// //     console.log("warning overspending")
// // } else {
// //     console.log("you are good")
// // }

// // ///challenge 5

// // console.log(!!"false" == !!"true");
// // console.log(0 || "Javascript");
// // console.log(" " && 100);
// // console.log(null ?? "Fallback");
// // console.log(undefined ?? "Default Value");

// // ///challenge 6

// // let a = "42";
// // let b = "3.14";
// // let c = "hello";
// // let d = false;
// // let e = null;

// // let sum = a + b + c + d + e
// // console.log(sum);

// ///// lesson 2 


// /// challenge 1 


// // let num1 = +prompt("Enter number: ")

// // let juft_sonlar = Math.floor(num1 / 2)
// // let toq_sonlar = num1 - juft_sonlar

// // console.log("Juft sonlar: " + juft_sonlar)
// // console.log("Toq sonlar: " + toq_sonlar)




// // let number = 1234; // Change this number

// // let reversed = 0;

// // while (number > 0) {
// //     let lastDigit = number % 10;   // Extract last digit
// //     reversed = reversed * 10 + lastDigit; 
// //     number = Math.floor(number / 10); // Remove last digit
// // }

// // console.log("Reversed number: " + reversed);

// //// challenge 3 



// /// challenge 3

// // let num = +prompt("son: {Kamida 5 xonali} ")

// // let max_digit = 0

// // while(num > 0){
// //     let digit = num % 10;
    
// //     if(max_digit < digit){
// //         max_digit = digit 
// //     }

// //     num = Math.floor(num / 10);
// // }

// // console.log(`Max digit: ${max_digit}`)


// /// challange 4

// // let son = +prompt("Enter num: ")

// // let sum = 0

// // while(son < 0){
// //     let digit = son % 10;
// //     sum+=digit;

// //     son = Math.floor(num / 10)
// // }
// // console.log(`Sum of numbers digit ${sum}`)

// /// challange 5

// // let son = +prompt("Enter num: ")

// // let count_digit = 0

// // while(son > 0){
// //     let digit = son / 10
// //     count_digit+=1

// //     son = Math.floor(son / 10)
// // }
// // console.log(`Count digit ${count_digit}`)




// /// Practice with switch


// /// challenge 1

// // let son1 = +prompt("son1: ")
// // let son2 = +prompt("son2: ")

// // if(son1 > son2){
// //     console.log(`Max: ${son1}`)
// // } else{
// //     console.log(son2)
// // }

// /// challenge 2

// let a = 3, b = 7, c = -2;

// let product = a * b * c;
// if(product > 0) alert("+")
// else if(product < 0) alert("-")
// else alert("0")


// ///challenge 3

// const sonlar = [];

// for(let i =1; i<=3; i++){
//     let son = +prompt("enter num: ")
//     sonlar.push(son)
// }

// console.log(sonlar)
// sonlar.sort();
// console.log(sonlar);


// /// challenge 4

// for(let i = 0; i<=15; i++){
//     if(i % 2 == 0){
//         console.log(`${i} is even number`)
//     }else{
//         console.log(`${i} is add number`)
//     }
// }

// /// challenge 5

// for(let i = 1; i<=100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 == 0){
//         console.log("Fizz")
//     }else if(i % 5 == 0){
//         console.log("Buzz")
//     }
// }


// /// challenge 6

// for(let i = 100; i<1000; i++){
//     let d1 = i % 10
//     let d2 = i % 10 / 10
//     let d3 = i / 100
//     if(i == (d1**3 + d2 ** 3 + d3 ** 3)){
//         console.log(i)
//     }
// }

// /// challenge 7

// const student = {
//     David: 100,
//     Vinoth: 50,
//     Divya: 88,
//     Ishtiha: 85,
//     Thomas: 68
// }

// for(const key in student){
//     if(key < 60){
//         console.log("F")
//     }else if(key < 70 && key > 61){
//         console.log("D")
//     }else if(key < 80 && key > 71){
//         console.log("C")
//     }else if(key < 90 && key > 81){
//         console.log("B")
//     }else if(key < 100 && key < 91){
//         console.log("A")
//     }
// }














