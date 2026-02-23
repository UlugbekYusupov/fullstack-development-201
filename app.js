// Challenge 1
console.log("5"+5); 
console.log("5"-5); 
console.log("5"*"2");
console.log("10"/2); 
console.log(5 + true); 
console.log("10" - true);
console.log("5" + true); 
console.log(5 + null);
console.log(5 + undefined);



// Challenge 2 

console.log("200" - (- 50));
console.log(25 + " years old"); 
console.log('false' === true)
console.log("10" - true);


//  Challenge 3

const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);
celsius = 30; // error


// Challenge 4

let budget; 
budget = Number(prompt("Enter your total budget:"));
let expense1 = prompt("Enter first expense:");
let expense2 = prompt("Enter second expense:");
let expense3 = prompt("Enter third expense:");
expense1 = Number(expense1)
expense2 = Number(expense2);
expense3 = Number(expense3);
let remaining = budget - expense1 - expense2 - expense3;
if (remaining < 0) {
  console.log("Warning: You have overspent!");
}
console.log("Remaining budget:", remaining.toFixed(2));


