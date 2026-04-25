const maktab = {
    nom: 'IT Maktabi',
    darslar: [
        {
            id: 1,
            fan: 'JavaScript',
            oqituvchi: { ism: 'Sardor', tajriba: 7 },
            talabalar: [
                { ism: 'Ali', baholar: [85, 90, 78, 92] },
                { ism: 'Vali', baholar: [70, 65, 88, 75] },
                { ism: 'Guli', baholar: [95, 98, 92, 97] },
            ]
        },
        {
            id: 2,
            fan: 'Python',
            oqituvchi: { ism: 'Kamola', tajriba: 5 },
            talabalar: [
                { ism: 'Hamza', baholar: [60, 72, 68, 75] },
                { ism: 'Nilufar', baholar: [88, 91, 85, 93] },
            ]
        }
    ]
};

// VAZIFALAR:
// (Barcha funksiyalarda destructuring majburiy!)

// 1. getBestStudent(dars) — Har bir darsdan eng yuqori
//    o'rtacha baholi talabani qaytarsin.
//    getBestStudent(maktab.darslar[0]) → { ism: 'Guli', ortacha: 95.5 }


const getBestStudent = ({ talabalar }) => {
  return talabalar.map(({ ism, baholar }) => ({
      ism,
      ortacha: baholar.reduce((a, b) => a + b, 0) / baholar.length
    }))
    .sort((a, b) => b.ortacha - a.ortacha)[0];
};

// console.log(getBestStudent(maktab))

// 2. getTeacherSummary(maktab) — Barcha o'qituvchilar haqida
//    quyidagi formatda ma'lumot qaytarsin:
//    [
//      { ism: 'Sardor', fan: 'JavaScript', talabalarSoni: 3 },
//      { ism: 'Kamola', fan: 'Python', talabalarSoni: 2 },
//    ]

const getTeacherSummary = ({ darslar }) => {
  return darslar.map(({ fan, oqituvchi: { ism }, talabalar }) => ({
    ism,
    fan,
    talabalarSoni: talabalar.length
  }));
};

console.log(getTeacherSummary(maktab))

// 3. getTopStudentsPerClass(maktab) — Har bir fandan
//    eng yaxshi talabaning ismini qaytarsin:
//    { JavaScript: 'Guli', Python: 'Nilufar' }

const getTopStudentsPerClass = ({ darslar }) => {
  return darslar.reduce((acc, dars) => {
    const { fan } = dars;
    const { ism } = getBestStudent(dars);
    acc[fan] = ism;
    return acc;
  }, {});
};

console.log(getTopStudentsPerClass(maktab))