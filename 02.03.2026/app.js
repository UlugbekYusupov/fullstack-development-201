function greet(name) {
     console.log(`Hello ${name}`);
}

// Function expression assigned to `x` — keep it anonymous to avoid confusion
let x = function(name) {
     console.log(`Hello ${name}`);
};

x("Muhammaddiyor");

// Arrow function
let y = (name) => {
     console.log(`Hello ${name}`);
};

y("Sarvar");

// Immediately-invoked function expression (IIFE)
(function(name) {
     console.log(`Hello ${name}`);
})("Diyor");