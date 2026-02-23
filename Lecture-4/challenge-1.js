let a, ans = -99999;
for (let i = 0; i < 2; i++) {
    a = parseInt(prompt());
    ans = Math.max(ans, a);
}
console.log(ans);