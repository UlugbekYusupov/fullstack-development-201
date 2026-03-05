let message = "Привет"

message = "Пока"

console.log(message)

//Function Declaration
function sum(a, b){
     return a + b;
}

//Function Expression
let sumer = function(a, b) {
     return a + b;
}

//Arrow Function
let sum2 = (a, b) => {
     return a + b;
}

//IIFE Function
(function (a, b) {
     return a + b;
})(2, 3);

//Function Constructor
let sum3 = new Function(
     'a',
     'b',
     'return a + b'
)

console.log(sum3(23, 12))

