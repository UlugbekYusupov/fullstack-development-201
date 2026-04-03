const app = document.getElementById('app');

const calculator = document.createElement('div');
calculator.className = 'calculator';

const display = document.createElement('input');
display.className = 'display';
display.type = 'text';
display.value = '0';
display.readOnly = true;

const keys = document.createElement('div');
keys.className = 'keys';

const buttons = [
    { label: 'C', type: 'action' },
    { label: 'DEL', type: 'action' },
    { label: '%', type: 'operator' },
    { label: '÷', type: 'operator' },
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '×', type: 'operator' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '-', type: 'operator' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+', type: 'operator' },
    { label: '0', type: 'number', span: 2 },
    { label: '.', type: 'number' },
    { label: '=', type: 'equal' }
];

let current = '';
let previous = '';
let operator = null;

function updateDisplay(value) {
    display.value = value === '' ? '0' : value;
}

function compute() {
    const a = parseFloat(previous);
    const b = parseFloat(current);

    if (Number.isNaN(a) || Number.isNaN(b) || !operator) return '';

    let result = 0;
    if (operator === '+') result = a + b;
    if (operator === '-') result = a - b;
    if (operator === '×') result = a * b;
    if (operator === '÷') result = b === 0 ? 'Error' : a / b;

    return result.toString();
}

function handleNumber(label) {
    if (label === '.' && current.includes('.')) return;
    current = current + label;
    updateDisplay(current);
}

function handleOperator(label) {
    if (current === '' && previous === '') return;

    if (previous !== '' && current !== '') {
        const result = compute();
        previous = result;
        current = '';
        updateDisplay(previous);
    } else if (previous === '') {
        previous = current;
        current = '';
    }

    operator = label;
}

function handleAction(label) {
    if (label === 'C') {
        current = '';
        previous = '';
        operator = null;
        updateDisplay('0');
        return;
    }

    if (label === 'DEL') {
        current = current.slice(0, -1);
        updateDisplay(current);
        return;
    }

    if (label === '%') {
        if (current === '') return;
        current = (parseFloat(current) / 100).toString();
        updateDisplay(current);
    }
}

function handleEqual() {
    if (previous === '' || current === '' || !operator) return;
    const result = compute();
    updateDisplay(result);
    current = result;
    previous = '';
    operator = null;
}

buttons.forEach((btn) => {
    const button = document.createElement('button');
    button.className = `btn ${btn.type}`;
    button.textContent = btn.label;

    if (btn.span) {
        button.classList.add('span-2');
    }

    button.addEventListener('click', () => {
        if (btn.type === 'number') handleNumber(btn.label);
        if (btn.type === 'operator') handleOperator(btn.label);
        if (btn.type === 'action') handleAction(btn.label);
        if (btn.type === 'equal') handleEqual();
    });

    keys.appendChild(button);
});

calculator.appendChild(display);
calculator.appendChild(keys);
app.appendChild(calculator);
