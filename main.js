let timerDisplay = document.querySelector('.timerDisplay');
let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerID = null;

startbtn.addEventListener('click', function() {
    if (timerID !== null) {
        clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function() {
    clearInterval(timerID);
    timerID = null;
});

resetbtn.addEventListener('click', function() {
    clearInterval(timerID);
    timerID = null;
    timerDisplay.innerHTML = '00 : 00 : 00';
    msec = secs = mins = 0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minString} : ${secsString} : ${msecString}`;
}
