/**
* Qaysi metoddan qachon foydalanish kerak — Professional qaror qabul qilish
*/

const sonlar = [5, 12, 8, 130, 44];

// find() — Birinchi mos elementning O'ZINI qaytaradi (yoki undefined)
const kattaSon = sonlar.find(n => n > 10); // 12

// findIndex() — Birinchi mos elementning INDEKSini qaytaradi (yoki -1)
const indeks = sonlar.findIndex(n => n > 10); // 1

// includes() — Boolean qaytaradi, oddiy mavjudlik tekshiruvi
const bormi = sonlar.includes(8); // true

// some() — Hech bo'lmasa BITTA element shartni qondirsa → true
const birortasiKattami = sonlar.some(n => n > 100); // true

// every() — HAMMASI shartni qondirsa → true
const hammaBirxilmi = sonlar.every(n => n > 0); // true

// ✅ Performance qaroriga misol:
// Faqat mavjudligini bilish kerakmi? → some() (birinchi topganda to'xtaydi)
// Topilgan elementning o'zi kerakmi? → find()
// Indeksi kerakmi? → findIndex()
// ❌ Noto'g'ri: filter()[0] ishlatish (hamma elementni tekshirib o'tadi)
const noto = sonlar.filter(n => n > 100)[0]; // ❌ Keraksiz ish
const to = sonlar.find(n => n > 100);       // ✅ To'g'ri