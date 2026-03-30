// challenge 1
console.log("5" + 5);
console.log("5" - 5);
console.log("5" * "2");
console.log("10" / 2);
console.log(5 + true);
console.log("10" - true);
console.log("5" + true);
console.log(5 + null);
console.log(5 + undefined);

// challenge 2

let num1 = Number("200") + 50;
console.log(num1);

let age = String(25) + " years old";
console.log(age);

let isFalse = Boolean("false");
console.log(isFalse);

// challenge 3
const celsius = 25;

let fahrenheit = (celsius * 9/5) + 32;

console.log(`Celsius: ${celsius}°C`);
console.log(`Fahrenheit: ${fahrenheit}°F`);

/*
let userCelsius = prompt("Selsiy darajasini kiriting:");
let userFahrenheit = (Number(userCelsius) * 9/5) + 32;
alert(`Natija: ${userFahrenheit}°F`);
*/


// challenge 4
// 1
let totalBudget = prompt("Umumiy budjetingizni kiriting:");
totalBudget = Number(totalBudget);

// 2
let exp1 = Number(prompt("1-xarajatni kiriting:"));
let exp2 = Number(prompt("2-xarajatni kiriting:"));
let exp3 = Number(prompt("3-xarajatni kiriting:"));

// 3
let remainingBalance = totalBudget - (exp1 + exp2 + exp3);

// 4
if (remainingBalance < 0) {
    console.log("Ogohlantirish: Siz juda ko'p pul sarflab yubordingiz!");
} else {
    console.log("Budjetingiz yetarli.");
}

//
console.log("Qolgan mablag': " + remainingBalance.toFixed(2));

