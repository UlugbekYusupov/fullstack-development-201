let numbers = prompt("Uchta son kiriting: ").split(" ").map(Number)
let check = numbers[0] * numbers[1] * numbers[2]

if(check < 0){
     console.log("Minus: -")
} else {
     console.log("Plus: +")
}

console.log(numbers)