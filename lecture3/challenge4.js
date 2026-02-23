let number = Math.abs(parseInt(process.argv[2])) || 12345;
let sum = 0;
let temp = number; 

while (number > 0) {
    let lastDigit = number % 10;

    sum = sum + lastDigit;

    number = Math.floor(number / 10);
}

console.log(`Son: ${temp}`);
console.log(`Raqamlar yig'indisi: ${sum}`);