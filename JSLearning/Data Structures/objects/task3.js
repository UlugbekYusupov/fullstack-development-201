//Observer pattern — zamonaviy front-end frameworklarining (Vue, MobX, RxJS) asosi. Siz reaktiv (reactive) obyekt yarating — ya'ni, qiymat o'zgarganda avtomatik ravishda obunachilarga xabar beradigan tizim.
// VAZIFA: createObservable(initialData) funksiyasini yozing.
// Bu funksiya reaktiv obyekt qaytarsin.

// Ishlatish tartibi:
const store = createObservable({
    foydalanuvchi: 'Ali',
    hisob: 1000,
    aktiv: true
});

// 1. subscribe(kalit, callback) — Berilgan kalitni "kuzatishga" olsin.
//    Qiymat o'zgarganda callback(yangiQiymat, eskiQiymat) chaqirilsin.
store.subscribe('hisob', (yangi, eski) => {
    console.log(`Hisob: ${eski} → ${yangi}`);
});

// 2. set(kalit, qiymat) — Qiymat o'rnatsin va obunachilarga xabar bersin.
store.set('hisob', 900); // Console: "Hisob: 1000 → 900"
store.set('hisob', 750); // Console: "Hisob: 900 → 750"

// 3. get(kalit) — Joriy qiymatni qaytarsin.
store.get('hisob'); // 750

// 4. unsubscribe(kalit, callback) — Obunani bekor qilsin.
//    Keyin set() chaqirilsa, bu callback boshqa chaqirilmasin.

// 5. (BONUS) getHistory(kalit) — Berilgan kalit uchun
//    barcha o'zgarishlar tarixini qaytarsin:
store.getHistory('hisob');
// [
//   { qiymat: 1000, vaqt: '...' },  ← Boshlang'ich
//   { qiymat: 900,  vaqt: '...' },
//   { qiymat: 750,  vaqt: '...' },
// ]