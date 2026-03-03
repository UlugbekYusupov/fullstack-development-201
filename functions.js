// types of function

// 1 function declaration
//  i can use this function before this code comes
 function sum(a,b){
    return a+b;
 }

// 2 function expression
//  this code doesnt work before it comes
let sum = function (a,b){
    return a+b;
}

// 3 arrow function 

let sum = (a,b) => {
    return a+b;
}
// not need return
let summ = (num1,num2) => num1 + num2;

// 4 iife function 
// A function expression that runs as soon as it is defined, 
// typically used to create a new scope and avoid polluting the global namespace.
(function(a,b) {
    return a+b;
})(2,3)


// 5 function constructor

let sum = new Function(
    'a',
    'b',
    'return a+b'
)

// callback functions
