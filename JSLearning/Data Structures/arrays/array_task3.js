// Quyidagi yordamchi funksiyalar berilgan:
const filterAktiv = users => users.filter(u => u.aktiv);
const sortByYosh = users => [...users].sort((a, b) => a.yosh - b.yosh);
const faqatIsm = users => users.map(u => u.ism);
const upperCase = arr => arr.map(s => s.toUpperCase());

// Foydalanuvchilar:
const users = [
  { ism: 'Ali',     yosh: 30, aktiv: true  },
  { ism: 'Vali',    yosh: 25, aktiv: false },
  { ism: 'Guli',    yosh: 28, aktiv: true  },
  { ism: 'Hamza',   yosh: 22, aktiv: true  },
  { ism: 'Nilufar', yosh: 35, aktiv: false },
];

// VAZIFA:
// 1. pipe() funksiyasini yozing. Bu funksiya funksiyalar ro'yxatini qabul qilib,
//    ularni chapdan-o'ngga ketma-ket qo'llaydigan yangi funksiya qaytarishi kerak.

// pipe() ishlatish misoli:
const process = pipe(filterAktiv, sortByYosh, faqatIsm, upperCase);
const natija = process(users);
// Kutilgan: ['HAMZA', 'GULI', 'ALI']

// 2. Shu vazifani faqat reduce() yordamida amalga oshiring.
//    Ya'ni pipe() funksiyasining ichida FAQAT reduce() ishlatilishi kerak.

// BONUS (ixtiyoriy):
// 3. compose() funksiyasini yozing — pipe() ning teskari versiyasi (o'ngdan-chapga)
//    const processCompose = compose(upperCase, faqatIsm, sortByYosh, filterAktiv);
//    const natija2 = processCompose(users);
//    // Xuddi yuqoridagidek natija bo'lishi kerak: ['HAMZA', 'GULI', 'ALI']