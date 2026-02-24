let name, mark, s = 0;
for (let i = 0; i < 5; i++) {
    name = prompt()
    mark = parseInt(prompt())
    s += mark
    if (s < 60) console.log(name + "'s " + "mark is" + mark + " F")
    else if (s < 70) console.log(name + "'s " + "mark is" + mark + " D")
    else if (s < 80) console.log(name + "'s " + "mark is" + mark + " C")
    else if (s < 90) console.log(name + "'s " + "mark is" + mark + " B")
    else console.log(name + "'s " + "mark is " + mark + " A")
}
console.log("Total mark is " + s / 5)