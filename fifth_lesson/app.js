// first lesson

const students = [
    {name: "Alice", scores: [80,90,100]},
    {name: "Bob", scores: [50,60,70]},
    {name: "Charlie", scores: [30,40, 20]}
];
function getAverageScore(student) {
    let sum = 0;
    
    for (let i = 0; i < student.scores.length; i++) {
        sum = sum + student.scores[i];
    }
    
    return sum / student.scores.length;
}

let averageScores = [];

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    
    let talabaNatijasi = {
        name: student.name,
        averageScore: getAverageScore(student)
    };
    
    averageScores.push(talabaNatijasi);
}


console.log(averageScores);

for (let i = 0; i < averageScores.length; i++) {
    if (averageScores[i].averageScore >= 50) {
        console.log(`${averageScores[i].name} has passed`);
    } else {
        console.log(`${averageScores[i].name} has failed`);
    }
}

function Top_performingStudent(students) {
    let topStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].averageScore > topStudent.averageScore) {
            topStudent = students[i];
        }
    }
    return topStudent;
}

console.log(Top_performingStudent(students));


// second lesson

const cart = [
    {id: 1, name: "Laptop", price: 900, quantity: 1},
    {id: 2, name: "Mouse", price: 50, quantity: 2},
    {id: 3, name: "Keyboard", price: 100, quantity:1}
]

function TotalPrice(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price * cart[i].quantity;
    }
    return total;
}

console.log(TotalPrice(cart));


function withDiscount(val){
    return val *0.9
}

console.log(withDiscount(TotalPrice(cart)));

function MostExpensiveProduct(cart) {
    let mostExpensive = cart[0];
    for (let i = 1; i < cart.length; i++) {
        if (cart[i].price > mostExpensive.price) {
            mostExpensive = cart[i];
        }
    }
    return mostExpensive;
}

console.log(MostExpensiveProduct(cart));