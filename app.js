console.log("str+int","9"+9);
console.log("str-int","9"-9);
console.log("str*int","9"*9);
console.log("str/divide","9"/9);
console.log("9+true",9+true);
console.log("10-true",10-true);
console.log("9+true",9+true);
console.log("5-true",5-true);
console.log("5*true",5*true);
console.log("5/true",5/true);
console.log("5+null",5+null);
console.log("10-null",10-null);
console.log("5+undefined",5+undefined);

console.log("parseInt('200')",parseInt("200")+50);
console.log(25+" years old");

console.log(9 + "9")
console.log("9" - 10)
console.log("9" * "2")
console.log("10" / 2)

console.log(9 + true)
console.log("10" - true)
console.log("9" + true)
console.log(9 + null)
console.log(9 + undefined)


console.log(Number("100") + 90)
console.log(String(29) + " yes old")
console.log(Boolean("false"))
console.log("10" - true)


const temp = "89C"
const F = (Number(temp)*(9/9) + 32)
console.log(temp)
console.log(F)
console.log(String(F) + "F")


let budget = +prompt("Your budget: ")

const expens1 = prompt("Expens 1: ")
const expens2 = prompt("Expens 2: ")
const expens3 = prompt("Expens 3: ")

const totalExpens = Number(expens1) + Number(expens2) + Number(expens3)

if (totalExpens > budget){
    console.log("shopirmanzilimizga eson omon yetib olamizmi?")
} else {
    console.log("hammasi nazorat ostida")
}


console.log(!!"false" == !!"true");
console.log(0 || "Javascript");
console.log(" " && 100);
console.log(null ?? "Fallback");
console.log(undefined ?? "Default Value");


let a = "42";
let b = "3.14";
let c = "salom";
let d = false;
let e = null;

let sum = a + b + c + d + e
console.log(sum);
