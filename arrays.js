let colors = ['red','green','blue']


console.log(colors)

let nums = new Array(5)
console.log(nums.length)

let original = [1,2,3]

let copy = [...original]

console.log(copy)


let setToArray = [... new Set(['a','b','c'])]

console.log(setToArray)

let numbers = Array.of(5)

console.log(numbers)

//  to add a new element
numbers.push(7)
console.log(numbers)

//  to remove last element
numbers.pop()
console.log(numbers)


//  to remove first element
numbers.shift()
console.log(numbers)

// to add element to the beginning
numbers.unshift(7)
numbers.unshift(9)
console.log(numbers)

//  map har bir element ga point qilish uchun ishlatiladi, yangi array qaytaradi, eski arrayda boshqa
const roots = numbers.map((num) => Math.sqrt(num))
console.log(roots)

const users = [{name: 'Alice',age:28},{name:'Bob',age:34}]
const userName = users.map((user) => user.name)
numbers.push(8)
//  filter ,har bir elementga condition qoshib tekshirish imkonini beradi

const evenNumbers = numbers.filter(function(number) {
    return number%2==0
})
const evenNumbersArrow = numbers.filter(number => number%2 ==0)

console.log(evenNumbers)
console.log(evenNumbersArrow)

// reduce array elementlarini yigib yakuniy qiymat (son,obyekt,massiv) qaytaradi
// array.reduce((accumulator, currentValue) => {
//   // logic
// }, initialValue);

const total = numbers.reduce((acc,curr) => {
    return acc + curr
},0)

console.log(total)


numbers.push(1,2,3,10)
console.log(numbers)
console.log(numbers.sort((a,b) => a-b))

console.log(numbers.reverse())

const xa = numbers.slice(3)
console.log(xa)

console.log(xa.splice(2))

// find berilgan massivdan shartga mos keluvchi birinchi sonni qaytaradi
const found = numbers.find(element => element > 8)
console.log(found)

// shartga mos keluvchi birinchi sonning indexini qaytaradi
const foundd = numbers.findIndex(element => element > 10)
console.log(foundd)

console.log(numbers.includes(4))




