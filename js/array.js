//// what is array?
// let array = [1,2,3,4,5,6,7,8,9,10];

// creating array


let arr1 = [2, 4, 6]
let arr2 = new Array(2, 7, 8, 3, 0, 5)
let arr3 = Array.of("salom", "dunyo", 34, true, -32, "ok", false)
let arr4 = Array.from("hello")


console.log(arr1[0])
arr2[-1] = 20;

console.log(arr2)


console.log(`it's array length ${arr3.length}`)

let doubled = arr1.map(x => x * 2)
console.log(doubled)


arr3.forEach(item => console.log(item))

let new_arr = new Array(1, 2, 3, 4, 5)

