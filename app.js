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

function arm(n, p){
  let s = 0
  let k = n
  while(k > 0){
    s += (k % 10) ** p
    k = parseInt(k / 10)
  }
  return s === n ? true : false
}

let n = prompt()
let p = n.length
n = parseInt(n)
console.log(arm(n, p) ? "Yes" : "No")