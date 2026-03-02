let n = parseInt(prompt())

function isArmstrong(n) {
    let s = 0, t = n
    while (t > 0) {
        let d = t % 10
        s += d * d * d
        t = Math.floor(t / 10)
    }
    return s === n
}

console.log(isArmstrong(n))



