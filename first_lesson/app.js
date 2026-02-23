console.log("5" + 5);
console.log("5" - 5);
console.log("5" * "2");
console.log("10" / 2);
console.log(5 + true);
console.log("10" - false);
console.log("5" + true);
console.log(5 + null);
console.log(5 + undefined);

// Second challenge
console.log("200" - (-50));
console.log(25 + " years old");
console.log("false" == true);
console.log("10" - true);

// Third challenge

const celcius = 25;
const fahrenheit = (celcius * 9) / 5 + 32;
console.log(`${celcius}°C is equal to ${fahrenheit}°F`);


// Fourth challenge

let a;
budget = Number(prompt("What is your budget?"));
const expense1 = Number(prompt("Enter your first expense:"));
const expense2 = Number(prompt("Enter your second expense:"));
const expense3 = Number(prompt("Enter your third expense:"));

const totalExpenses = expense1 + expense2 + expense3;
const remainingBudget = budget - totalExpenses;

if (remainingBudget < 0) {
  console.log(
    `Warning: You have overspent! Your remaining budget is $${remainingBudget.toFixed(
      2
    )}.`
  );
} else {
  console.log(
    `You have $${remainingBudget.toFixed(2)} left in your budget.`
  );
}
