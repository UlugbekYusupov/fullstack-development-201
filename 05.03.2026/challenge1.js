//1.Function Declaration
function greet(name){
     console.log(`Hello ${name}!`)
}

greet("Sarvar")

//2.Function Expression
let greetName = function(name){
     console.log(`Hello ${name}!`)
}

greetName("Jamshid")

//3. Arrow Function
let greetMyName = (name) => {
     console.log(`Hello ${name}!`)
}

greetMyName("Asror");

//4. IIFE Function
(function(name) {
     console.log(`Hello ${name}!`)
})("Muhammaddiyor");

//5. Function Constructor
let greetFullName = new Function(
     'name',
     'console.log(`Hello ${name}!`)'
)

greetFullName("Akmal")