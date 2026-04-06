// Challenge – 1
let number = 20;
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Juft sonlar soni: " + evenCount);
console.log("Toq sonlar soni: " + oddCount);


// Challenge - 2
let num = 1234;
let reversed = 0;

while (num > 0) {
    let lastDigit = num % 10;
    reversed = (reversed * 10) + lastDigit;
    num = Math.floor(num / 10);
}

console.log("Teskari qilingan son: " + reversed);


// Challenge - 3
let inputNum = 58293;
let maxDigit = 0;

while (inputNum > 0) {
    let currentDigit = inputNum % 10;

    if (currentDigit > maxDigit) {
        maxDigit = currentDigit;
    }

    inputNum = Math.floor(inputNum / 10);
}

console.log("Eng katta raqam: " + maxDigit);

// Challenge 4
let number1 = 456;
let sum = 0;

while (number1 > 0) {
    let lastDigit = number1 % 10;
    sum = sum + lastDigit;
    number1 = Math.floor(number1 / 10);
}

console.log("Raqamlar yig'indisi: " + sum);