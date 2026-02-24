let students = {"David": 85, "Alice": 92, "Bob": 78, "Charlie": 90, "Eve": 95};

for (let student in students) {
    if (students[student] >= 90) {
        console.log(student + " is an excellent student.");
    } else if (students[student] >= 80) {
        console.log(student + " is a good student.");
    } else if (students[student] >= 70) {
        console.log(student + " needs improvement.");
    } else if (students[student] >= 60) {
        console.log(student + " is failing.");
    } else {
        console.log(student + " is failing.");
    }
}

for (let n = 0; n <=3; n++) {
    a = prompt("Son kiriting:");
    if (a>0) {
        console.log("Musbat son");
    } else if (a<0) {
        console.log("Manfiy son");
    } else {
        console.log("Nol");
    }
}

let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];