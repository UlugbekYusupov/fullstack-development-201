const natijalar = [
  { ism: 'Ali',    fan: 'Matematika', ball: 85 },
  { ism: 'Vali',   fan: 'Fizika',     ball: 72 },
  { ism: 'Guli',   fan: 'Matematika', ball: 91 },
  { ism: 'Hamza',  fan: 'Kimyo',      ball: 65 },
  { ism: 'Nilufar',fan: 'Fizika',     ball: 88 },
  { ism: 'Jasur',  fan: 'Matematika', ball: 79 },
  { ism: 'Zulfiya',fan: 'Kimyo',      ball: 95 },
  { ism: 'Bobur',  fan: 'Fizika',     ball: 58 },
];

// 1. Har bir fan bo'yicha o'rtacha ballni hisoblang
// Kutilgan: { Matematika: 85, Fizika: 72.67, Kimyo: 80 }

const avg = natijalar.reduce((acc, cur) => {
  if (!acc[cur.fan]) {
    acc[cur.fan] = { sum: 0, count: 0 };
  }

  acc[cur.fan].sum += cur.ball;
  acc[cur.fan].count++;

  return acc;
}, {});

const avgResult = Object.fromEntries(
  Object.entries(avg).map(([fan, val]) => [
    fan,
    +(val.sum / val.count).toFixed(2)
  ])
);

console.log(avgResult);

// 2. Eng yuqori ball olgan o'quvchini toping (to'liq obyektni qaytaring)

const topStudent = natijalar.reduce((max, cur) =>
  cur.ball > max.ball ? cur : max
);

console.log(topStudent);

// 3. Har bir fandan o'tgan (ball >= 70) o'quvchilar sonini hisoblang
// Kutilgan: { Matematika: 3, Fizika: 2, Kimyo: 1 }



const passed = natijalar.reduce((acc, cur) => {
  if (cur.ball >= 70) {
    acc[cur.fan] = (acc[cur.fan] || 0) + 1;
  } else if (!acc[cur.fan]) {
    acc[cur.fan] = 0;
  }
  return acc;
}, {});

console.log(passed);

// 4. Barcha o'quvchilarni ball bo'yicha kamayish tartibida saralang,
//    ORIGINAL array O'ZGARMAGAN bo'lsin
//    va faqat "ism: ball" formatida qaytaring
// Kutilgan: ['Zulfiya: 95', 'Guli: 91', 'Nilufar: 88', ...]


const sorted = [...natijalar]
  .sort((a, b) => b.ball - a.ball)
  .map(o => `${o.ism}: ${o.ball}`);

console.log(sorted);