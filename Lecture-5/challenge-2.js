let n = parseInt(prompt())

function isPrime(n) {
    if (num <= 1) return false
    for (let i = 2; i <= i * i; i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(n))