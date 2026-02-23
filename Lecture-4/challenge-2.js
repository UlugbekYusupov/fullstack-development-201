let a, ans = 1;
for (let i = 0; i < 3; i++) {
    a = parseInt(prompt())
    ans *= a
}
if (ans == 0) console.log("The sign is 0")
else if (ans < 0) console.log("The sign is -")
else console.log("The sing is +")
