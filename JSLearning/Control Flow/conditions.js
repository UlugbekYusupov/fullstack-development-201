let yosh = 20;

if (yosh >= 18) {
    console.log("Siz kinoga kirishingiz mumkin!");
} else {
    console.log("Kechirasiz, sizga ruxsat yo'q.");
}

let soat = 14;

if (soat < 12) {
    console.log("Xayrli tong!");
} else if (soat < 18) {
    console.log("Xayrli kun!"); // Soat 14 bo'lgani uchun shu qator ishlaydi
} else {
    console.log("Xayrli kech!");
}

let meva = "olma";

switch (meva) {
    case "banan":
        console.log("Banan narxi 20,000 so'm");
        break; // Break - to'xtatish. Buni yozmasangiz, pastdagi kodlar ham ishlab ketadi!
    case "olma":
        console.log("Olma narxi 15,000 so'm");
        break;
    case "anor":
        console.log("Anor narxi 30,000 so'm");
        break;
    default:
        console.log("Bunday meva do'konimizda yo'q");
}

/////// switch da doimo qat'iy tenglik (===) ishlatiladi. Ya'ni ma'lumot turi ham bir xil bo'lishi shart!

// 1-Mashq: Imtihon natijalari (if/else if)
// Sizda o'quvchining to'plagan bali (0 dan 100 gacha raqam) bor. Shunga qarab baho chiqarib beruvchi mantiq yozing:
// Agar bal 86 dan 100 gacha bo'lsa: "A'lo"
// Agar bal 71 dan 85 gacha bo'lsa: "Yaxshi"
// Agar bal 56 dan 70 gacha bo'lsa: "Qoniqarli"
// Agar bal 55 yoki undan past bo'lsa: "Yiqildingiz"

let score = 77;

if (score >= 86) {
    console.log("A'lo")
} else if (score >= 71) {
    console.log("Yaxshi")
} else if (score >= 56) {
    console.log("Qoniqarli")
} else {
    console.log("Yiqildinggiz")
}

// 2-Mashq: Svetafor (switch)
// let chiroq = "qizil"; deb o'zgaruvchi oching. switch operatori yordamida:
// "qizil" bo'lsa -> "To'xtang!"
// "sariq" bo'lsa -> "Tayyorlaning!"
// "yashil" bo'lsa -> "Harakatni boshlang!"
// Boshqa har qanday so'z kiritilsa -> "Svetafor buzilgan" degan yozuv chiqaring.

let chiroq = "qizil";

switch (chiroq) {
    case "qizil":
        console.log('To\'xtang');
        break;
    case "sariq":
        console.log('Tayyorlaning!');
        break;
    case "yashil":
        console.log('Harakatni boshlang!');
        break;
    default:
        console.log('Svetafor buzilgan');
}


// 3-Mashq: Mantiqiy xatoni toping
// Quyidagi kodda xatolik yashiringan. Nima uchun u biz kutgandek ishlamayapti va uni qanday to'g'rilash kerak?


let harorat = 35;

if (harorat > 0) {
  console.log("Havo iliq, kurtka kerak emas.");
} else if (harorat > 30) {
  console.log("Havo juda issiq, konditsionerni yoqing!");
} else {
  console.log("Havo sovuq.");
}
//ketma ketlik buzilgan, kattadan kichikka yoki kichikdan kattaga qarab borish kerak->sovuq, iliq, issiq
// Muammo: Harorat 35 bo'lganda ham "Havo iliq" deb chiqyapti. Nega?

let harorat2 = 35;
if (harorat2 <= 0) {
  console.log("Havo sovuq.");
} else if (harorat2 <= 30) {
  console.log("Havo iliq, kurtka kerak emas.");
} else {
  console.log("Havo juda issiq, konditsionerni yoqing!");
}