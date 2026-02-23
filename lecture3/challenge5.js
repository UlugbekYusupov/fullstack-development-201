let number = Math.abs(parseInt(process.argv[2])) || 987654; 
let count = 0;
let temp = number;

if (number === 0) {
    count = 1;
}

while (number > 0) {
    number = Math.floor(number / 10);

    count++;
}

console.log(`Son: ${temp}`);
console.log(`Raqamlar soni: ${count} ta`);