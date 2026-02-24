// first task

function findProductSign(num1, num2, num3) {
  const product = num1 * num2 * num3;
  
  if (product > 0) {
    alert("The sign is +");
  } else if (product < 0) {
    alert("The sign is –");
  } else {
    alert("The sign is 0");
  }
}

findProductSign(3, -7, 2); 

// second task

function sortThreeNumbers(num1, num2, num3) {
  const numbers = [num1, num2, num3];
  
  numbers.sort((a, b) => b - a);
  
  alert(`${numbers[0]}, ${numbers[1]}, ${numbers[2]}`);
}

sortThreeNumbers(0, -1, 4);


// third task

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// fourth task
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// fifth task
console.log("Armstrong numbers of 3 digits:");

for (let num = 100; num <= 999; num++) {
  const digit1 = Math.floor(num / 100);
  const digit2 = Math.floor((num % 100) / 10);
  const digit3 = num % 10;
  
  const sumOfCubes = (digit1 ** 3) + (digit2 ** 3) + (digit3 ** 3);
  
  if (sumOfCubes === num) {
    console.log(num);
  }
}

// sixth task

students = {David : 80, Vinoth: 77, Divya: 88, Ishitha: 95, Thomas: 68};

for (const student in students) {
  if (students[student] >= 90) {
    console.log(`${student}: A`);
  } else if (students[student] >= 80) {
    console.log(`${student}: B`);
  } else if (students[student] >= 70) {
    console.log(`${student}: C`);
  } else if (students[student] >= 60) {
    console.log(`${student}: D`);
  } else {
    console.log(`${student}: F`);
  }
}
