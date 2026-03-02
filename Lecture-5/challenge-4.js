let s = prompt()

function isPolindrome(s) {
    let t = ""
    for (let i = s.length - 1; i >= 0; i--) {
        t += s[i]
    }
    return s === t
}

console.log(isPolindrome(s))