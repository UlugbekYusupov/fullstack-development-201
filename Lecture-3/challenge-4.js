let n = +prompt()
let ans = 0
while (n > 0) {
    ans += n % 10
    n = parseInt(n / 10)
}
console.log(ans)