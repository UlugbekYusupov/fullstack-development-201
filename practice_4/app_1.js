let number_1 = 6
let number_2 = 8
if (number_1>number_2){
    console.log(number_1)
}else {
    console.log(number_2)
}

let num_1 = 3
let num_2 = -7
let num_3 = 2

if (num_1*num_2*num_3>0){
    console.log("musbat")
}else{
    console.log("manfiy")
}


const numbers = [1, -4, 8]
let max = numbers[0]

numbers.sort((a, b)=>b-a);
console.log(numbers)



for (const num of numbers){
    if (max<num){
        max = num
    }
}
console.log(max)

let a = 1
let b = -4
let c = 8



