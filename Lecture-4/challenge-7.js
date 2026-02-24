let name, mark, s = 0;
for (let i = 0; i < 5; i++) {
    name = prompt()
    mark = parseInt(prompt())
    s += mark
    if (s < 60) console.log(name + "'s " + "mark is " + mark + " F")
    else if (s < 70) console.log(name + "'s " + "mark is " + mark + " D")
    else if (s < 80) console.log(name + "'s " + "mark is " + mark + " C")
    else if (s < 90) console.log(name + "'s " + "mark is" + mark + " B")
    else console.log(name + "'s " + "mark is " + mark + " A")
}
if (s < 60) console.log("Total mark is " + s / 5 + " F")
else if (s < 70) console.log("Total mark is " + s / 5 + " D")
else if (s < 80) console.log("Total mark is " + s / 5 + " C")
else if (s < 90) console.log("Total mark is " + s / 5 + " B")
else console.log("Total mark is " + s / 5 + " A")