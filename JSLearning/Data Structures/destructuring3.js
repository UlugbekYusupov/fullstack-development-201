// Quyidagi utility funksiyalarni yozing.
// Har birida destructuring MAJBURIY ishlatilishi kerak.

// 1. pick(obj, ...kalitlar) — Obyektdan faqat ko'rsatilgan
//    kalitlarni olib, yangi obyekt qaytarsin.
//    pick({ a:1, b:2, c:3, d:4 }, 'a', 'c') → { a:1, c:3 }

// 2. omit(obj, ...kalitlar) — Aksincha, ko'rsatilgan
//    kalitlarni OLIB TASHLAGAN yangi obyekt qaytarsin.
//    omit({ a:1, b:2, c:3 }, 'b') → { a:1, c:3 }

// 3. rename(obj, mapping) — Kalitlarni qayta nomlash.
//    rename({ firstName: 'Ali', age: 25 }, { firstName: 'ism' })
//    → { ism: 'Ali', age: 25 }

// 4. defaults(obj, defaultObj) — Faqat undefined bo'lgan
//    qiymatlarga default qo'ysın (null'ga emas!).
//    defaults({ a: 1, b: undefined, c: null }, { a:9, b:8, c:7, d:6 })
//    → { a: 1, b: 8, c: null, d: 6 }

// 5. (BONUS) deepPick(obj, yollar) — Nested obyektdan
//    dot-notation yo'llari bo'yicha qiymatlarni olib,
//    tekis obyekt qaytarsin:
//    deepPick(
//      { user: { name: 'Ali', addr: { city: 'Toshkent' } } },
//      ['user.name', 'user.addr.city']
//    )
//    → { 'user.name': 'Ali', 'user.addr.city': 'Toshkent' }


// 1. pick
function pick(obj, ...keys) {
    const result = {};

    for (const key of keys) {
        const { [key]: value } = obj;
        if (key in obj) {
            result[key] = value;
        }
    }

    return result;
}


// 2. omit
function omit(obj, ...keys) {
    const result = {};

    for (const key in obj) {
        if (!keys.includes(key)) {
            const { [key]: value } = obj;
            result[key] = value;
        }
    }

    return result;
}


// 3. rename
function rename(obj, mapping) {
    const result = {};

    for (const key in obj) {
        const { [key]: value } = obj;
        const newKey = mapping[key] || key;
        result[newKey] = value;
    }

    return result;
}


// 4. defaults
function defaults(obj, defaultObj) {
    const result = { ...obj };

    for (const key in defaultObj) {
        const { [key]: value } = result;

        if (value === undefined) {
            const { [key]: defVal } = defaultObj;
            result[key] = defVal;
        }
    }

    return result;
}


// 5.
function deepPick(obj, paths) {
    const result = {};

    for (const path of paths) {
        const keys = path.split('.');
        let current = obj;

        for (const key of keys) {
            const { [key]: value } = current || {};
            current = value;
        }

        result[path] = current;
    }

    return result;
}