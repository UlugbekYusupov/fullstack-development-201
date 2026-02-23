const limit = parseInt(process.argv[2]) || 10; 

let evenCount = 0; 
let oddCount = 0;  

console.log(`1 dan ${limit} gacha bo'lgan sonlarni tekshirish:\n---`);

for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Juft sonlar soni: ${evenCount}`);
console.log(`Toq sonlar soni: ${oddCount}`);