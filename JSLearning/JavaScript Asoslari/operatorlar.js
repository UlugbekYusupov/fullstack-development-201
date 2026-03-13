// 1-Mashq: Matematika va qoldiq
// Sizda 15 dona olma bor. Ularni 4 ta do'stingizga teng qilib bo'lib bermoqchisiz.

// Har bir do'stingizga qanchadan olma tegishini aniqlang (kasrsiz, faqat butun soni).

// O'zingizda nechta olma qoldiq sifatida qolishini % operatori yordamida hisoblab, konsolga chiqaring.

// 2-Mashq: Taqqoslash
// Quyidagi kodlar ekranga nima chiqarishini taxmin qiling (true yoki false) va nima uchunligini tushuntiring:

// JavaScript
// console.log(10 !== "10");
// console.log(5 > 3 && 10 < 5);
// console.log(100 === 100 || 50 === "50");

// 3-Mashq: Satrlarni qo'shish
// JavaScriptda + operatori satrlarni (String) bir-biriga ulash uchun ham ishlatiladi. Kichik tajriba qiling:
// O'zingizning ismingiz va familiyangizni ikkita alohida o'zgaruvchida saqlang. Keyin ularni + yordamida qo'shib, to'liq ism ko'rinishida konsolga chiqaring (ism va familiya o'rtasida bo'sh joy qoldirishni unutmang!).

let myapples = 15;
let everycount = myapples / 4;
console.log(Math.floor(everycount));
console.log(myapples % 4);

console.log(10 !== "10"); // TRUE chunki qiymatlar teng bo'lgani bilan type teng emas
console.log(5 > 3 && 10 < 5); // False, chunki True and False => False
console.log(100 === 100 || 50 === "50"); // True, chunki True or False => True

let first_name = "Tolibjon";
let last_name = "Nurmuhammedov";
console.log(first_name + " " + last_name)
