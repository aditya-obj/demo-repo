let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
    timer = setInterval(function() {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        document.querySelector('.hour').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.minute').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.second').textContent = seconds.toString().padStart(2, '0');
        document.querySelector('.mili-second').textContent = milliseconds.toString().padStart(2, '0');
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.querySelector('.hour').textContent = '00';
    document.querySelector('.minute').textContent = '00';
    document.querySelector('.second').textContent = '00';
    document.querySelector('.mili-second').textContent = '00';
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);