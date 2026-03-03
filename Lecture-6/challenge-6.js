let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

let cnt = 0

for(let i = 0; i < arr1.length; i++){
    if (arr1[i] === "a") {
        cnt++
    }
}

console.log("a " + "( " + cnt + " times )")