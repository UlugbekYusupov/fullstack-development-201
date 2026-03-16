// Berilgan ma'lumot:
const savat = [
    { id: 1, nom: 'Noutbuk', narx: 1200, soni: 1 },
    { id: 2, nom: 'Sichqoncha', narx: 25, soni: 3 },
    { id: 3, nom: 'Klaviatura', narx: 75, soni: 1 },
    { id: 4, nom: 'Monitor', narx: 300, soni: 2 },
    { id: 5, nom: 'Kabel', narx: 10, soni: 5 },
];

// 1. getTotal(savat) — Jami summani hisoblang (narx × soni)
// Kutilgan natija: 2000

function getTotal(savat) {
    const jami = savat.reduce((acc, item) => {
        return acc + (item.narx * item.soni);
    }, 0);
    return jami;
}
console.log(`Total summary: ${getTotal(savat)}`)

// 2. getExpensiveItems(savat, limit) — Narxi `limit` dan yuqori
// bo'lgan mahsulotlarni qaytaring (faqat nom va narxni)
// getExpensiveItems(savat, 100) → [{ nom: 'Noutbuk', narx: 1200 }, { nom: 'Monitor', narx: 300 }]

function getExpensiveItems(savat, limit) {
    return savat.filter(item => (item.narx >= limit));
}
console.log('Values:', getExpensiveItems(savat, 100));

// 3. applyDiscount(savat, percentage) — Har bir mahsulotga chegirma qo'llang
// ORIGINAL array o'zgarmasin! Yangi array qaytaring.
// applyDiscount(savat, 10) → har bir narx 10% kamaygan yangi savat

function applyDiscount(savat, percentage) {
    return savat.map(({ id, nom, narx, soni }) => ({
        id: id,
        nom: nom,
        narx: narx + (narx * percentage) / 100,
        soni: soni
    }))
}
console.log("Original:", savat)
console.log("With functions: (10%):", applyDiscount(savat, 10))

// 4. groupByPrice(savat) — Mahsulotlarni narx bo'yicha guruhlang:
//    'arzon' (narx < 50), 'o'rta' (50-500), 'qimmat' (> 500)
// Kutilgan natija: { arzon: [...], "o'rta": [...], qimmat: [...] }

function groupByPrice(savat) {
    return savat.reduce((acc, item) => {
        let kategoriya;

        if (item.narx < 50) {
            kategoriya = "arzon";
        } else if (item.narx <= 500) {
            kategoriya = "o'rta";
        } else {
            kategoriya = "qimmat";
        }

        if (!acc[kategoriya]) {
            acc[kategoriya] = [];
        }

        acc[kategoriya].push(item);

        return acc;
    }, { arzon: [], "o'rta": [], qimmat: [] });
}

console.log("With groupByPrice:", groupByPrice(savat, 10))