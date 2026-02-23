let name, mark, s = 0;
for (let i = 0; i < 5; i++) {
    name = prompt()
    mark = parseInt(prompt())
    s += mark
    if (s < 60) console.log("F")
    else if (s < 70) console.log("D")
    else if (s < 80) console.log("C")
    else if (s < 90) console.log("B")
    else console.log("A")
}