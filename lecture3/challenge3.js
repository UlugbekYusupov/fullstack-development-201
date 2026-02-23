let number = Math.abs(parseInt(process.argv[2])) || 48291;
let originalNumber = number;
let maxDigit = 0;

if (number === 0) {
    maxDigit = 0;
}

while (number > 0) {
    let currentDigit = number % 10;

    if (currentDigit > maxDigit) {
        maxDigit = currentDigit; 
    }

    number = Math.floor(number / 10);
}

console.log(`Berilgan son: ${originalNumber}`);
console.log(`Eng katta raqam: ${maxDigit}`);