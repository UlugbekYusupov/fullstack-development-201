//Siz ko'p tilli dastur uchun i18n (internationalization) lug'at tizimini yaratishingiz kerak.
// Berilgan ma'lumot:
const lugat = {
    uz: {
        salom: 'Salom',
        xayr: 'Xayr',
        rahmat: 'Rahmat',
        iltimos: 'Iltimos',
        ha: 'Ha',
        yoq: "Yo'q",
    },
    ru: {
        salom: 'Привет',
        xayr: 'Пока',
        rahmat: 'Спасибо',
        iltimos: 'Пожалуйста',
        ha: 'Да',
        yoq: 'Нет',
        raxmat: 'Spasiba'
    },
    en: {
        salom: 'Hello',
        xayr: 'Bye',
        rahmat: 'Thank you',
        iltimos: 'Please',
        ha: 'Yes',
        yoq: 'No',
    }
};

// VAZIFALAR:

// 1. translate(lugat, til, kalit) — Tarjima funksiyasini yozing.
//    Agar til yoki kalit topilmasa, "[tarjima topilmadi]" qaytarsin.
//    translate(lugat, 'en', 'salom') → 'Hello'
//    translate(lugat, 'de', 'salom') → '[tarjima topilmadi]'

function translate(lugat, lang, keyword) {
    if (!lugat[lang]) return "tarjima topilmadi";
    if (!lugat[lang][keyword]) return "tarjima topilmadi";
    return lugat[lang][keyword]
}
console.log(translate(lugat, 'uz', 'salom'));

// 2. getAvailableLanguages(lugat) → ['uz', 'ru', 'en']
//    Mavjud barcha tillar ro'yxatini qaytarsin.

function getAvailableLanguages(lugat) {
    l = [];
    for (const key in lugat) {
        if (lugat.hasOwnProperty(key)) {
            l.push(key)
        }
    }
    return l;
}

console.log(getAvailableLanguages(lugat))

// 3. getMissingTranslations(lugat) — Har bir tilda
//    qaysi kalitlar YO'QLIGINI qaytarsin.
//    (Agar 'en'da biror kalit bo'lmasa, u ro'yxatda chiqsin)
//    Kutilgan natija: { uz: [], ru: [], en: [] } ← Barchasi to'liq
//    (Agar biror til kalitlardan kam bo'lsa, u yerda ro'yxat chiqadi)

function getMissingTranslations(lugat) {
    const allKeys = new Set();

    for (const lang in lugat) {
        for (const key in lugat[lang]) {
            allKeys.add(key);
        }
    }

    const result = {};

    for (const lang in lugat) {
        const missing = [];

        allKeys.forEach(key => {
            if (!(key in lugat[lang])) {
                missing.push(key);
            }
        });

        result[lang] = missing;
    }

    return result;
}

console.log(getMissingTranslations(lugat));

// 4. invertLanguage(lugat, til) — Berilgan tilni teskari qilsin:
//    Qiymat → Kalit bo'lsin.
//    invertLanguage(lugat, 'en') →
//    { Hello: 'salom', Bye: 'xayr', 'Thank you': 'rahmat', ... }

function invertLanguage(lugat, til) {
    if (!lugat[til]) return "til topilmadi";
    
    const result = {};

    for (const key in lugat[til]) {
        const value = lugat[til][key];
        result[value] = key;
    }

    return result;
}

console.log(invertLanguage(lugat, 'en'));