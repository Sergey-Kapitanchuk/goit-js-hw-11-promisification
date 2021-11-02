const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const refs = {
    bodyEl: document.querySelector('body'),
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop:document.querySelector('[data-action="stop"]'),
}
let intervalId = null;

const clickStart = () => {
    intervalId = setInterval(() => {
        const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
        };
        refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000)
    startRef.disabled = true;
}

const clickStop = () => {
    clearInterval(intervalId);
    startRef.disabled = true;
}

refs.buttonStart.addEventListener('click', clickStart);
refs.buttonStop.addEventListener('click', clickStop);
