let budget = prompt("Iltimos byudjetingizni kiriting: ")
let rasxod = prompt("Iltimos *,*,* ko'rinishda, rasxodingizni kiriting: ")
let ayirma = rasxod.split("").map(Number)

let result = budjet - (ayirma[0]+ayirma[1]+ayirma[2])
if (result < 0) {
     console.log("Limit oshib ketdi!")
} else {
     console.log(result.toFixed(2))
}