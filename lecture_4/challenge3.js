//Challenge 3

const celsius = 25;

const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`Celsius: ${celsius}°C`);
console.log(`Fahrenheit: ${fahrenheit}°F`);

try {
    celsius = 30; 
} catch (err) {
    console.error('Error when reassigning const:', err.message);
}

(function bonusInput() {
    let input;
    if (typeof prompt === 'function') {
        input = prompt('Enter temperature in Celsius:');
    } else if (typeof process !== 'undefined') {
        input = process.argv[2]; // node challenge3.js 36
    }
    if (!input) return;
    const c = Number(input);
    if (Number.isNaN(c)) {
        console.error('Invalid Celsius value:', input);
        return;
    }
    const f = (c * 9 / 5) + 32;
    console.log(`Input Celsius: ${c}°C -> Fahrenheit: ${f}°F`);
})();