let yosh = "25";
console.log(typeof yosh)

let intYosh = Number(yosh)
console.info(typeof intYosh)

console.log(Number("100")); // 100 (Raqam)
console.log(Number("Salom")); // NaN (Not a Number - Raqam emas!). Agar matn ichida harflar bo'lsa, JS uni raqamga aylantirolmaydi va NaN qaytaradi.
console.log(Number(true)); // 1 (true = 1, false = 0 deb qabul qilinadi)

console.log(String(50)); // "50" (Matn)
console.log(String(false)); // "false" (Matn)


console.log(Boolean("")); // false
console.log(Boolean("Aziz")); // true
console.log(Boolean(0)); // false
console.log(Boolean(false)); // false
console.log(Boolean(true));

console.log("5" + 2); // "52" (Raqam 2 ni matnga aylantirdi)
console.log("10" - 2); // 8 (Zo'r-a? "10" ni raqam qilib ayirdi)
console.log("5" * "2"); // 10
// -, *, / operatorlari faqat matematika uchun ishlatilgani sababli, ular matnni majburan raqamga aylantiradi

console.clear()

// 1-Mashq
// Quyidagi kodlar konsolga qanday natija va qanday ma'lumot turi (typeof) chiqarishini o'ylab ko'ring (kodni ishga tushirmasdan topishga harakat qiling):

console.log("15" - 5); //10
console.log("15" + 5); //155
console.log(Number("JavaScript")); //Nan (Not a Number)
console.log(Boolean(0)); //False
console.log(Boolean("0")); // True


// 2-Mashq: Kalkulyatordagi xatoni tuzating
// Sizga bir dasturchi do'stingiz o'zi yozgan kodni olib keldi. U ikkita sonni qo'shmoqchi, lekin natija xato chiqyapti. Koddagi xatoni toping va uni Number() yordamida to'g'rilang.

let birinchiSon = "24"; 
let ikkinchiSon = "16";

let yigindi = Number(birinchiSon) + Number(ikkinchiSon);
console.log("Natija: " + yigindi); // Natija 40 chiqishi kerak, lekin "2416" chiqyapti!


// 3-Mashq: Falsy qiymatlarni aniqlash
// let qiymat = ... deb o'zgaruvchi oching. Unga shunday qiymat beringki, Boolean(qiymat) qilinganda natija false chiqsin. Bunday qiymatlardan kamida 3 xilini yozib ko'rsating.
let qiymat = 0;
let qiymat2 = false;
let qiymat3 = NaN;
let qiymat4 = "";
let qiymat5;

console.log(Boolean(qiymat));
console.log(Boolean(qiymat2));
console.log(Boolean(qiymat3));
console.log(Boolean(qiymat4));
console.log(Boolean(qiymat5));