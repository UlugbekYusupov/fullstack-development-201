let n = parseInt(prompt())

function countDigits(n) {
    let cnt = 0
    while (n > 0) {
        cnt++
        n = Math.floor(n / 10)
    }
    return cnt
}

console.log(countDigits(n))