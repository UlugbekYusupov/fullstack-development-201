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

// for (const element of values) {
//   console.log(element);
// }

//1
let a = 10;
let b = 20;

if (a > b) {
  console.log(a + " is larger");
} else if (b > a) {
  console.log(b + " is larger");
} else {
  console.log("Both are equal");
}

//2
let x = 3;
let y = -7;
let z = 2;

let product = x * y * z;

if (product > 0) {
  alert("The sign is +");
} else if (product < 0) {
  alert("The sign is -");
} else {
  alert("The sign is 0");
}

//3
let aa = 0;
let bb = -1;
let cc = 4;

let arr = [aa, bb, cc];
arr.sort(function (x, y) {
  return y - x;
});

alert(arr.join(", "));

//4
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//5
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//6
for (let i = 100; i <= 999; i++) {
  let num = i;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit ** 3;
    num = Math.floor(num / 10);
  }

  if (sum === i) {
    console.log(i);
  }
}

//7
let students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 },
];

let total = 0;

for (let i = 0; i < students.length; i++) {
  total += students[i].marks;
}

let average = total / students.length;
console.log("Average marks: " + average);

let grade;

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("Grade: " + grade);
