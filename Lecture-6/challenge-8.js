let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
let o = ["th","st","nd","rd"]

for(let i = 1; i <= color.length; i++){
    if (i % 10 === 1){
        console.log(i + o[1] + " choice is " + color[i - 1])
    } else if(i % 10 === 2) {
        console.log(i + o[2] + " choice is " + color[i - 1])
    } else if(i % 10 === 3){
        console.log(i + o[3] + " choice is " + color[i - 1])
    } else {
        console.log(i + o[0] + " choice is " + color[i - 1])
    }
}