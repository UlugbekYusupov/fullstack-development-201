// First exercise
// let FirstNumber = prompt("Enter the first number: ")
// let SecondNumber = prompt("Enter the second number: ")
// if (FirstNumber > SecondNumber) {
//     console.log("Larger number is " + FirstNumber)
// }
// else if (SecondNumber > FirstNumber) {
//     console.log("Larger number is " + SecondNumber)
// }
// else {
//     console.log("They are equal")
// }

// Second exercise
// let NumberArray = [3,-8,2]
// for (let i = 0; i < NumberArray.length; i++) {
//     if (NumberArray[i] < 0) {
//         alert("You entered negative number (" + NumberArray[i] + ") The Sign is '-' ")
//     }
// }

// Third exercise
// let FirstNumber = Number(prompt("Enter the first number: "))
// let SecondNumber = Number(prompt("Enter the second number: "))
// let ThirdNumber = Number(prompt("Enter the third number: "))

// let largest, average, smallest;

// if (FirstNumber >= SecondNumber && FirstNumber >= ThirdNumber) {
//     largest = FirstNumber
//     if (SecondNumber >= ThirdNumber) {
//         average = SecondNumber
//         smallest = ThirdNumber
//     }
//     else {
//         average = ThirdNumber
//         smallest = SecondNumber
//     }
// }
// else if (SecondNumber >= FirstNumber && SecondNumber >= ThirdNumber) {
//     largest = SecondNumber
//     if (FirstNumber >= ThirdNumber) {
//         average = FirstNumber
//         smallest = ThirdNumber
//     }
//     else {
//         average = ThirdNumber
//         smallest = FirstNumber
//     }
// }
// else {
//     largest = ThirdNumber
//     if (FirstNumber >= SecondNumber) {
//         average = FirstNumber
//         smallest = SecondNumber
//     }
//     else {
//         average = SecondNumber
//         smallest = FirstNumber
//     }
// }

// console.log("Largest: " + largest + ", Average: " + average + ", Smallest: " + smallest)

// 4-exercise
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even")
//     }
//     else {
//         console.log(i + " is odd")
//     }
// }

// 5-exercise
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz")
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz")
//     }
//     else if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     }
//     else {
//         console.log(i)
//     }
// }

// 6-exercise
// Could not accomplish this task

// 7-exercise
let Marks = [80,77,88,95,68]
let sum = 0

for (let i = 0; i < Marks.length; i++) {
    sum += Marks[i]
    sum = sum / Marks.length
}
console.log("Their average mark is: " + sum)

if (sum <= 60) {
    console.log("Grade: F")
}
else if (sum > 60 && sum <=70) {
    console.log("Grade: D")
}
else if (sum > 70 && sum <= 80) {
    console.log("Grade: C")
}
else if (sum > 80 && sum <=90) {
    console.log("Grade: 90")
}
else if (sum > 90 && sum <= 100) {
    console.log("Grade: A")
}