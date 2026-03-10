const students = [
    {name: "Alice", scores: [80,90,100]},
    {name: "Bob", scores: [50,60,70]},
    {name: "Charlie", scores: [30,20,20]},
];

let topstudent;
let highaverage = 0;


////task 1
students.forEach(student => {
    let sum = student.scores.reduce((a,b) => a + b, 0);
    let avg = sum/student.scores.length;

    let status = avg >=50 ? "passed" : "Failed";
    console.log(`${student.name} - avg: ${avg} - ${status}`);

    if(avg > highaverage){
        highaverage = avg
        topstudent = student.name;
    }
})
console.log(`High performing student: ${topstudent}`);


// task 2
const cart = [
  { id: 1, name: "Laptop", price: 900, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];


let total = 0;
let most_exp = 0;
let most_exp_name = "";
cart.forEach(item => { 
    total += item.price * item.quantity;
    if(item.price * item.quantity > most_exp){
        most_exp = item.price * item.quantity;
        most_exp_name = item.name;
    }
})
console.log(`Total Price: $${total} (after discount)`);


// Expected Output: "Total Price: $990 (after discount)"