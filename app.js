// Challenge 1
console.log("5"+5); 
console.log("5"-5); 
console.log("5"*"2");
console.log("10"/2); 
console.log(5 + true); 
console.log("10" - true);
console.log("5" + true); 
console.log(5 + null);
console.log(5 + undefined);



// Challenge 2 

console.log("200" - (- 50));
console.log(25 + " years old"); 
console.log('false' === true)
console.log("10" - true);


//  Challenge 3

const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);
celsius = 30; // error


// Challenge 4

let budget; 
budget = Number(prompt("Enter your total budget:"));
let expense1 = prompt("Enter first expense:");
let expense2 = prompt("Enter second expense:");
let expense3 = prompt("Enter third expense:");
expense1 = Number(expense1)
expense2 = Number(expense2);
expense3 = Number(expense3);
let remaining = budget - expense1 - expense2 - expense3;
if (remaining < 0) {
  console.log("Warning: You have overspent!");
}
console.log("Remaining budget:", remaining.toFixed(2));


// ---------------------------------------------------------------------


// Challenge 1 


let num;
num = Number(prompt("Enter a number:"));

if (num % 2 == 0) {
    console.log("Count of even numbers: " + num / 2);
    console.log("Count of odd numbers: " + num / 2);
}
if (num % 2 == 1) {
    console.log("Count of odd numbers: " + (num + 1) / 2);
    console.log("Count of even numbers: " + (num - 1) / 2);
}



// Challenge 2

let number;
let num1 = Number(prompt("Enter a number:")); 

let reversed = 0;

while (num1 > 0) {
    let lastDigit = num1 % 10;
    reversed = reversed * 10 + lastDigit;
    num1 = num1 / 10 | 0; 
}

console.log(reversed);


// Challenge 3

let number1;
let num2 = Number(prompt("Enter a number:"));

let largest = 0;

while (num2 > 0) {
    let last = num2  % 10;
    
    if (last > largest) {
        largest = last;
    }
    
    num2 = num2 / 10 | 0;
}

console.log(largest);


// Challenge 4

let nunmber2;
let num3 = Number(prompt("Enter a number:"));

let sum = 0;

while (num3 > 0) {
    let last1 = num3 % 10;
    sum += last1;
    num3 = num3 / 10 | 0;
}

console.log(sum);


// Challenge 5


let num4;
num4 = Number(prompt("Enter a number:"));
countOfDigits = 0;

while (num4 > 0) {
    num4 = Math.floor(num4 / 10);
    countOfDigits++;
}

console.log("Count of digits: " + countOfDigits);



// ---------------------------------------------------------------------


// Challenge 1 
const int1 = 15;
const int2 = 23;
let largest1;
if (int1 > int2) {
  largest1 = int1;
} else {
  largest1 = int2;
}
console.log(`The largest integer between ${int1} and ${int2} is: ${largest1}`);

// Challenge 2 
const n1 = 3;
const n2 = -7;
const n3 = 2;
const product = n1 * n2 * n3;
if (product > 0) {
  console.log("The sign is +");
} else if (product < 0) {
  console.log("The sign is –");
} else {
  console.log("The sign is 0");
}

// Challenge 3 
const numbers = [0, -1, 4];
numbers.sort((a, b) => b - a);
console.log(`${numbers[0]}, ${numbers[1]}, ${numbers[2]}`);



// Challenge 4

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// Challenge 5
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

// Challenge 6



function arm(n, p) {
    let sum = 0;
    let k = n;
    while(k > 0){
        sum += (k % 10) ** p;
        k = Math.floor(k / 10);
    }
    return sum === n ? true : false;
}


let n = prompt("Enter a number:");
let p = String(n).length;

n = parseInt(n);
console.log(arm(n, p) ? `${n} YES` : `${n} NO`);



// Challenge 7

students = [
  { name: "David", score: 80 },
  { name: "Vinoth", score: 77 },
  { name: "Divya", score: 88 },
  { name: "Ishitha", score: 95 },
  { name: "Thomas", score: 68 }
];

for (const student of students) {
  if (student.score >= 90) {
    console.log(`${student.name}: A`);
  } else if (student.score >= 80) {
    console.log(`${student.name}: B`);
  } else if (student.score >= 70) {
    console.log(`${student.name}: C`);
  } else if (student.score >= 60) {
    console.log(`${student.name}: D`);
  } else {
    console.log(`${student}: F`);
  }
}







