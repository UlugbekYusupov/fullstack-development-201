
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

// Challenge 6: createCounter(start)
function createCounter(start = 0) {
  let count = start;
  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

// Challenge 7: orderFood(name, address, food)
function orderFood(name, address, food) {
  return `Dear ${name}, your ordered food (${food}) will be ready in 15 minutes and will be delivered to your address (${address}).`;
}

// Challenge 8: lazyAdder(a)
function lazyAdder(a) {
  return function (b) {
    return a + b;
  };
}

// ---------------- Assignment ----------------

// Challenge 1: Dynamic Pricing Calculation
function dynamicPricing(prices) {
  const subtotal = prices.reduce((acc, p) => acc + p, 0);
  const itemCount = prices.length;

  let discountRate = 0;
  if (itemCount >= 5) discountRate = 0.2;
  else if (itemCount >= 3) discountRate = 0.1;

  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  return { subtotal, itemCount, discountRate, discount, total };
}

// Challenge 2/5: Password Strength Checker
function passwordStrength(password) {
  const checks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const passed = Object.values(checks).filter(Boolean).length;
  if (passed <= 2) return "Weak";
  if (passed === 3) return "Medium";
  return "Strong";
}

// Challenge 3: ATM Cash Withdrawal System
function atmWithdraw(amount) {
  if (amount <= 0 || amount % 10 !== 0) {
    return { error: "Amount must be a positive number and a multiple of 10." };
  }

  const bills = [100, 50, 20, 10];
  const result = {};
  let remaining = amount;

  for (const bill of bills) {
    const count = Math.floor(remaining / bill);
    if (count > 0) {
      result[`$${bill}`] = count;
      remaining -= bill * count;
    }
  }

  return { amount, bills: result };
}

// Challenge 4: Traffic Light Simulation
function trafficLightSimulation(cycles = 1) {
  const sequence = [
    { color: "Red", duration: 5000 },
    { color: "Green", duration: 3000 },
    { color: "Yellow", duration: 2000 },
  ];

  let step = 0;
  const totalSteps = cycles * sequence.length;

  function run() {
    if (step >= totalSteps) return;
    const current = sequence[step % sequence.length];
    console.log(`${current.color} (${current.duration / 1000}s)`);
    step += 1;
    setTimeout(run, current.duration);
  }

  run();
}

// Challenge 6: Closures in Banking System
function bankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) return "Invalid deposit amount.";
      balance += amount;
      return `Deposited: $${amount}. Balance: $${balance}`;
    },
    withdraw(amount) {
      if (amount <= 0) return "Invalid withdraw amount.";
      if (amount > balance) return "Insufficient balance.";
      balance -= amount;
      return `Withdrawn: $${amount}. Balance: $${balance}`;
    },
    getBalance() {
      return balance;
    },
  };
}

// Challenge 7: Role-Based Access System
function createRoleAccess(role) {
  const permissions = {
    admin: ["add", "edit", "delete", "view"],
    editor: ["edit", "view"],
    viewer: ["view"],
  };

  const allowed = permissions[role] || [];

  return {
    role,
    can(action) {
      return allowed.includes(action);
    },
    getPermissions() {
      return [...allowed];
    },
  };
}

// Challenge 8: Dynamic Tax Calculator
function dynamicTaxCalculator(income) {
  if (income < 0) return { error: "Income cannot be negative." };

  let taxRate = 0;
  if (income >= 50000) taxRate = 0.2;
  else if (income >= 10000) taxRate = 0.1;

  const tax = income * taxRate;
  return {
    income,
    taxRate,
    tax,
    netIncome: income - tax,
  };
}

// ---------------- Bonus ----------------

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function taskScheduler() {
  const ids = [];
  return {
    schedule(task, delay) {
      const id = setTimeout(task, delay);
      ids.push(id);
      return id;
    },
    cancelAll() {
      while (ids.length) {
        const id = ids.pop();
        clearTimeout(id);
      }
    },
  };
}

// ---------------- Demo ----------------

console.log(greetDecl("Ali"));
console.log(greetExpr("Vali"));
console.log(greetArrow("Laylo"));
console.log(greetIIFE("Nodir"));
console.log(greetConstructor("Aziza"));

console.log("isPrime(17):", isPrime(17));
console.log("countDigits(12345):", countDigits(12345));
console.log("isPalindrome(12321):", isPalindrome(12321));
console.log("isArmstrong(153):", isArmstrong(153));

const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());

console.log(orderFood("Boborahim", "Toshkent", "Lavash"));

const add5 = lazyAdder(5);
console.log(add5(10));
console.log(add5(20));

console.log(dynamicPricing([100, 200, 300]));
console.log(passwordStrength("Abc123!@#"));
console.log(atmWithdraw(130));
console.log(dynamicTaxCalculator(62000));

const myAccount = bankAccount(100);
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(30));
console.log(myAccount.getBalance());

const admin = createRoleAccess("admin");
console.log(admin.can("delete"));
console.log(admin.can("publish"));

// Uncomment to run simulation and scheduler demos:
// trafficLightSimulation(1);
// const scheduler = taskScheduler();
// scheduler.schedule(() => console.log("Task 1"), 1000);
// scheduler.schedule(() => console.log("Task 2"), 2000);
// scheduler.cancelAll();
