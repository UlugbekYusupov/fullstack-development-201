// challenge 1

const students = [
    {name: "Alice",scores: [80,90,100]},
    {name: "Bob", scores: [50,60,70]},
    {name: "Charlie", scores: [30,40,20]}
]
let topStudent = null
let highestAvg = 0 
students.forEach(student => {
    const total = student.scores.reduce((sum,score) => sum + score,0)
    const avg = total/student.scores.length

    const passed = avg >= 50

    // console.log(`${student.name} average: ${avg} - ${passed ? "Passed" : "Failed"}`)

    if(avg > highestAvg){
        highestAvg  = avg
        topStudent = student.name
    }
})

// console.log(`${topStudent} has the highest average: ${highestAvg}`)

// challenge2

const cart = [{id:1,name: "Book", price: 900, quantity: 1},
                {id:2,name: "Mouse", price: 50, quantity: 2},
                {id:3,name: "Keyboard", price: 100, quantity: 1}
]
let totalPrice = 0
let mostExpensive= cart[0]
cart.forEach(element => {

    if(element.price * element.quantity >= 100){
        totalPrice += element.price * element.quantity * 0.9
    } else {
        totalPrice += element.price * element.quantity
    }

    if(element.price > mostExpensive.price){
        mostExpensive = element
    }

}); 

// console.log(totalPrice)
// console.log(mostExpensive)


// challenge 3
let products = [
    {id: 1, name: 'Laptop',price: 1200,stock:10},
    {id: 2,name: "Phone", price: 700,stock: 15}
]


function addProduct(product){
    products.push(product)
}

function updateStock(id,newStock){
    products = products.map(p => 
        p.id = id? {...p, stock: newStock}: p
    )
}

function deleteProduct(id){
    products = products.filter(p => p.id = id)
}

function findProduct(name){
    return products.find(p => p.name === name)
}


addProduct({id:3,name:"Tablet",price:500,stock:8})
updateStock(1,20)
deleteProduct(2)

// console.log(findProduct("Laptop"))
// console.log(products)


