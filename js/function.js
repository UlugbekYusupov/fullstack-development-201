/// functions practice 


// challenge 1 

let ism = "Davron"
// function declaration
function greet(name){
    return `Hello ${name}`
}
console.log(greet(ism))

// function expressions 

let greet2 = function(name){
    return `Hello ${name}`
}
console.log(greet2(ism))

// arrow function 
let greet3 = (name) => {
    return `Hello ${name}`
} 
console.log(greet3(ism))

// IIFE function 

(function (name){
    return `Hello ${name}`
})(ism)

// Function constructor

let greet4 = new Function(
    "name", "return `Hello ${name}`"
);
console.log(ism)


// challange 2

function isPrime(n){
    if(n == "prime"){
        return true
    }else{
        return false
    }
}

console.log(isPrime("prime"))

// challenge 3

function countDigit(n){
    let count = 0
    while(n > 0){
        count += n % 10
        n /= 10
    }
    return count
}
console.log(countDigit(34353))

// challenge 4

let isPalidrome = function(n){
    const reversedStr = cleanedStr.split('').reverse().join('');
    return reversedStr === n;
}
console.log(isPalidrome("salom"))
console.log(isPalidrome(454))
console.log(isPalidrome("kiyik"))

// challange 5

let isArmstrong = function(n){
    let original = n;
    let sum = 0;
    let digits = n.toString().length;

    while (n > 0) {
        let digit = n % 10;
        sum += digit ** digits;
        n = Math.floor(n / 10);
    }

    return sum === original;
}
console.log(isArmstrong(153))


/// challange 6 

const createCounter = function(start){
    let count = start;
    return {
        increment: function(){
            count++;
        },
        decrement: function(){
            count--
        },
        getCount: function(){
            return count;
        }
    };
}


// challenge 7

const order_food = function(name, address, food){
    return `Dear ${name}, your food ${food} will be ready in 15 minuts and will be delivered to your address ${address}`
}

let name = prompt("your name: ")
let address = prompt("your address: ")
let food = prompt("what do you want to order: ")

console.log(order_food(name, address, food))


/// challenge 8 
function lazyAdder(a) {
    return function(b) {
        return a + b;
    };
}


const add5 = lazyAdder(5); 
console.log(add5(10)); 
console.log(add5(20));









