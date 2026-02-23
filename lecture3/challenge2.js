let number = parseInt(process.argv[2]) || 1234; 
let originalNumber = number; 
let reversed = 0;

while (number > 0) {
    let lastDigit = number % 10;

    reversed = (reversed * 10) + lastDigit;

    number = Math.floor(number / 10);
}

console.log(`Asl son: ${originalNumber}`);
console.log(`Teskari son: ${reversed}`);