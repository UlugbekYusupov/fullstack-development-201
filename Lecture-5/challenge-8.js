function lazyAdder(a) {
    return function(b) {
        return a + b;
    };
}

const add5 = lazyAdder(5);

console.log(add5(10)); 
console.log(add5(20)); 