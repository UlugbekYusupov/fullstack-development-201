let array1 = [1,0,2,3,4]
let array2 = [3,5,6,7,8,13]

for(let i = 0; i < array1.length; i++){
    array2[i] += array1[i]
}

console.log(array2)