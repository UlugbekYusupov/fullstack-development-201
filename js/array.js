//// what is array?
// let array = [1,2,3,4,5,6,7,8,9,10];

// creating array


let arr1 = [2, 4, 6, 9, 7, 1]
let arr2 = new Array(2, 7, 8, 3, 0, 5)
let arr3 = Array.of("salom", "dunyo", 34, true, -32, "ok", false)
let arr4 = Array.from("hello")


console.log(arr1[0])
arr2[-1] = 20;

console.log(arr2)


console.log(`it's array length ${arr3.length}`)

/// map()
let doubled = arr1.map(x => x * 2)
console.log(doubled)

/// forEach()
arr3.forEach(item => console.log(item))
let new_arr = new Array(1, 2, 3, 4, 5, 23)


// filter()
let even = arr1.filter(x => x % 2 === 0);
console.log(even)


/// reduce()
let sum = new_arr.reduce((a, b) => a + b, 0);
console.log(`its reduce function result ${sum}`)

/// find()
let = fildfunct = new_arr.find(x => x > 10);
console.log(fildfunct)

///findIndex()

let index = new_arr.findIndex(x => x > 10);
console.log(index)

/// some()
let check = new_arr.some(x => x < 10);
console.log(check)

// every()
let check2 = new_arr.every(x => x > 4);
console.log(check2)


/// manipulation methods

/*
    9. push()
    10. pop()
    11. shift()
    12. unshift()
*/

let num = new Array(4, 5, -1, 0, -3, 10, 8, 14);

/// slice() non-mutating

let kesish = num.slice(2,5);
console.log(kesish)

/// splice() mutating ⚠

let mutating = num.splice(3, 7);
console.log(mutating)
console.log(num)


/// concat()
let concat_arr = num.concat(mutating)
console.log(concat_arr)

const fruits1 = ['apple', 'banana', 'orange'];

// include()

let include_arr  = fruits1.includes("salom");
console.log(include_arr)


//indexOf()
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape'];
console.log(fruits.indexOf('apple'));   

//lastIndexOf()
console.log(fruits.lastIndexOf('apple')); 
///join()



