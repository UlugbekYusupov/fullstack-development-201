const lights = {
    red: document.querySelector('.red'),
    yellow: document.querySelector('.yellow'),
    green: document.querySelector('.green')
};

function setActive(color) {
    Object.values(lights).forEach((el) => el.classList.remove('active'));
    lights[color].classList.add('active');
}

const sequence = [
    { color: 'red', time: 5000 },
    { color: 'yellow', time: 2000 },
    { color: 'green', time: 5000 },
    { color: 'yellow', time: 2000 }
];

let index = 0;

function run() {
    const step = sequence[index];
    setActive(step.color);
    index = (index + 1) % sequence.length;
    setTimeout(run, step.time);
}

run();
