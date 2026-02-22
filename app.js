console.log(5 + '5')

console.log('5' - 5)

console.log('5' * 2)


console.log('10' / 2)

console.log(5 + true)


console.log('10' - true)


console.log('5' + true)


console.log(5 + null)


console.log(5 + null)

console.log(5 + undefined)


console.log(parseInt('200') + 50)

let num = 25
let str = num.toString()
console.log(str + ' years old')


console.log('false' === true)

console.log('10' - true)


// Execution Context nima ?
// Executioin context bu JavaScript kodi ishlaydigan va uning uchun zarur bo'lgan barcha malumotlar (o'zgaruvchilar,funksiyalar,
// this kalit so'zi, scope zanjir ) saqlanadigan muhit yoki konteyner. Kod har gal bajarilganda, JS dvigateli xotira va kodni boshqarish
// uchun maxsus kontekst yaratadi.
// Execution Context turlari: 
// 1) Global Execution Context (GEC): kod birinchi yuklanganda yaratiladigan asosiy, yagona kontekst
// 2) Function Execution Context (FEC): Funksiya chaqirilganda har bir chaqiruv uchun alohida yaratiladigan muhit.
// 
// Execution Context bosqichlari:
//  1. Yaratish bosqichi(Phase creation): O'zgaruvchilar va funksiyalar xotiradan joy oladi (hoisting) this qiymati aniqlanadi.
//  2. Bajarish bosqichi (Execution Phase): Kod satrma-satr o'qilib, o'zgaruvchilarga qiymatlar yuklanadi va funksiyalar ishlaydi.
// u kodning bajarilish tartibini (Call Stack) boshqaradi.