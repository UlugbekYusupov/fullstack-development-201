//program that displays the largest integer among two integers
// 5 6
// output 6

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function hisobla() {
    const rl = readline.createInterface({ input, output });

    // Birinchi sonni olish
    const javob1 = await rl.question('Birinchi sonni kiriting: ');
    const son1 = Number(javob1);
    
    // Ikkinchi sonni olish
    const javob2 = await rl.question('Ikkinchi sonni kiriting: ');
    const son2 = Number(javob2);

    if (son1 > son2) {
          console.log(`Birinchi son katta: ${son1}`)
    } else if (son1 == son2) {
          console.log("Teng")
    } else {
          console.log("Ikkinchi son katta: " + son2)
    }


    rl.close();
}

hisobla();