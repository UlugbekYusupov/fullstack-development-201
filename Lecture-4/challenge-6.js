let ans = 0, k;
for (let i = 100; i < 1000; i++) {
    k = i;
    while (k > 0) {
        ans += (k % 10) ** 3
        k = Math.floor(k / 10)
    }
    if (ans === i) console.log(i)
    ans = 0
}