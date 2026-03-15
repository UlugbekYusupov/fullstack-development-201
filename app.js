
function greetDecl(name) {
  return `Hello, ${name}!`;
}

const greetExpr = function (name) {
  return `Hello, ${name}!`;
};

const greetArrow = (name) => `Hello, ${name}!`;

const greetIIFE = (function () {
  return function (name) {
    return `Hello, ${name}!`;
  };
})();

const greetConstructor = new Function("name", "return `Hello, ${name}!`;");

// Challenge 2: isPrime(n)
function isPrime(n) {
  if (n <= 1 || !Number.isInteger(n)) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Challenge 3: countDigits(n)
function countDigits(n) {
  const value = Math.abs(Math.trunc(n));
  return value.toString().length;
}

// Challenge 4: isPalindrome(n)
function isPalindrome(n) {
  const str = Math.abs(Math.trunc(n)).toString();
  return str === str.split("").reverse().join("");
}

// Challenge 5: isArmstrong(n)
function isArmstrong(n) {
  const value = Math.abs(Math.trunc(n));
  const digits = value.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + d ** power, 0);
  return sum === value;
}

// greet(function () {
//   console.log("Bu callback");
// });

// Array.prototype.getValues = function () {
//   console.log("Bu Array prototypedan kelyapdi");
// };

// Array().getValues();

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}

let b = 1;
do {
  console.log(b);
  b++;
} while (b < 10);

const user = {
  username: "Ulugbek",
  age: 30,
  country: "Uzbekistan",
};

const values = Object.values(user);
const keys = Object.keys(user);

console.log(values);
console.log(keys);

for (const key in user) {
  const element = user[key];
  console.log(element);
}



for (const element in values) {
  console.log(element);
}
