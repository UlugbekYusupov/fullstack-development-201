const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Iltimos, Selsiy darajasini kiriting: ", (input) => {
  const celsius = parseFloat(input);
  const fahrenheit = (celsius * 9 / 5) + 32;
  
  console.log(`Selsiy: ${celsius}°C | Farengayt: ${fahrenheit}°F`);
  readline.close();
});