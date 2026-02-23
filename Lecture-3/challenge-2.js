let n = +prompt()
let ans = ""
while (n > 0) {
    ans += n % 10
    n = parseInt(n / 10)
}
console.log(ans)
