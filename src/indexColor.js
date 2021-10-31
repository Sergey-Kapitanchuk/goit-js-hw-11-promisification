const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const bodyEl = document.querySelector('body');  

bodyEl.insertAdjacentHTML('beforeend', ` <button type="button" data-action="start">Start</button>
             <button type="button" data-action="stop">Stop</button>`);

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => { return Math.floor(Math.random() * (max -
min + 1) + min); }; 
const change = () => {
    return bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}
const intervalId = setInterval(change, 1000);

const e=() => {
    intervalId;
    buttonStart.removeEventListener('click', e)
}

buttonStart.addEventListener('click', e);
buttonStop.addEventListener('click', evt => {
    clearInterval(intervalId);
    e;
});


    



