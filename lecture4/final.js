let students = {
     "David": 80,
     "Vinoth": 77,
     "Divya": 88,
     "Ishitha": 95,
     "Thomas": 68
}

let result = {
     "David": "",
     "Vinoth": "",
     "Divya": "",
     "Ishitha": "",
     "Thomas": ""
}

for(let student in students){
     if(students[student] <= 60){
          result[student] = "F" 
     } else if (students[student] <= 70){
          result[student] = "D" 
     } else if(students[student] <= 80){
          result[student] = "C"
     } else if(students[student] <= 90){
          result[student] = "B"
     } else if(students[student] <= 100){
          result[student] = "A"
     }
}

console.log(result)