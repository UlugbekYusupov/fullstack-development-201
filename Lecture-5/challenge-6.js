let n = parseInt(prompt())

function incement(n) {
    return n + 1
}

function decrement(n) {
    return n - 1
}

function getCounter(n) {
    return n 
}

function createCounter(n) {
    console.log(incement(n))
    console.log(decrement(n))
    console.log(getCounter(n))
}

createCounter(n)