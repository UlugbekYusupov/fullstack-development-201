let number = prompt("Ilitmos 3 ta son kiriting: ")
               .split(" ")
               .map(Number)
               .reverse()

console.log(`${number[0]} ${number[1]} ${number[2]}`)