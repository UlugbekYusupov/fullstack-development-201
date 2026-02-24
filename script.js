// 1
let num = 75
let even = Math.floor(num/2)
let odd = num % 2 === 0  ? even : even+1;
console.log(`juft ${even}, toq ${odd}`)
// 2
num = 1234
let strnum = String(num)
let teskari = ''
for(let i = strnum.length - 1 ; i>=0; i-- ){
    teskari += strnum[i]
}
console.log(teskari)

// 3

num = 71467448
let big = 0
for (let i = 0; i<=String(num).length; i++){
    big = Number(String(num)[i]) > big ? Number(String(num)[i]) : big 
}

console.log(big)

// 1
let a = 2
let b = 9
console.log(a>b ? a : b)

// 2
a = 12
b = -92
let c = -32
if (a<0 || b < 0 || c<0){
    console.log("-")
}else{
    console.log("+")
}

// 3
const arr = [a,b,c]
const arr_len = arr.length
const newarr = []
while(newarr.length<arr_len){
    let min = arr[0]
    for (let i = 0; i<arr.length; i++){
        if (arr[i]<min){
            min = arr[i]
        }
    }
    newarr.push(min)
    arr.splice(arr.indexOf(min),1)
}
console.log(newarr)

// 4 
for (let i = 1; i<=15; i++){
    if (i%2===0){
        console.log(i," is even")
    }else{
        console.log(i," is odd")
    }
}

// 5
for (let i = 1; i<=100; i++){
    if (i%15===0){console.log("FizzBuzz")}
    else if (i%3===0){console.log("Fizz")}
    else if (i%5===0){console.log("Buzz")}
}

// 6
function Arm(num){
    let strnum = String(num)
    let sum = 0
    for(let i = 0; i<strnum.length; i++){
        sum += Number(strnum[i])**strnum.length
    }
    return num === sum ? console.log(num) : null
}

for (let i = 100; i<1000; i++ ){
    Arm(i)
}


