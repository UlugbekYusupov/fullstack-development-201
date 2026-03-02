function greet(name) {
    return "Hello " + name
}

console.log(greet("Javlon"))

function isPrime(n) {
    let loop = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            loop++
        } else {
            continue
        }
    }
    if (loop > 2) {
        volue = false
    }else {
        volue = true
    }
    console.log(loop)
    return volue
}

console.log(isPrime(2))