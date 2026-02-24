let number = prompt("Iltimos son kiriting: ").split("").map(Number)
let result = 0


for(let num of number){     console.log(num)

     result += num ** 3
}

console.log(result)