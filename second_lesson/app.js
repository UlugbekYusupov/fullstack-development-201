// First task

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

// Second task 

let num1;
num1 = Number(prompt("Enter a number:"));
let reversedNum = 0;

while (num1 > 0) {
    let digit = num1 % 10;
    reversedNum = reversedNum * 10 + digit;
    num1 = Math.floor(num1 / 10);
}

console.log("Reversed number: " + reversedNum);

// Third task

let num2;
num2 = Number(prompt("Enter a number:"));
largestdigit = 0;
while (num2 > 0) {
    let digit = num2 % 10;
    if (digit > largestdigit) {
        largestdigit = digit;
    }
    num2 = Math.floor(num2 / 10);
}

console.log("Largest digit: " + largestdigit);


// Fourth task

let num3;
num3 = Number(prompt("Enter a number:"));
let sum = 0;

while (num3 > 0) {
    let digit = num3 % 10;
    sum += digit;
    num3 = Math.floor(num3 / 10);
}

console.log("Sum of digits: " + sum);

// Fifth task

let num4;
num4 = Number(prompt("Enter a number:"));
countOfDigits = 0;

while (num4 > 0) {
    num4 = Math.floor(num4 / 10);
    countOfDigits++;
}

console.log("Count of digits: " + countOfDigits);