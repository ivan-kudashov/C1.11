const clock = $('#clock');
const minMinusBttn = $('#min-minus');
const minPlusBttn = $('#min-plus');
const secMinusBttn = $('#sec-minus');
const secPlusBttn = $('#sec-plus');
const inputField = $('#time-input');
const sendBttn = $('#send');
const startBttn = $('#start');
const resettBttn = $('#reset');
const regex = '[0-5][0-9][:,.,\,, ][0-5][0-9]';


function Timer() {
    this.minutes = 0;
    this.seconds = 0;

    this.setTimer = function() {
        this.clockString = `${pad(this.minutes, 2)}:${pad(this.seconds, 2)}`
        clock.text(this.clockString);
        inputField.class('');
    }
}

function addMin() {
    if (timer.minutes < 59) {
        timer.minutes++;
        timer.setTimer();
    }
}

function subMin() {
    if (timer.minutes > 0) {
        timer.minutes--;
        timer.setTimer();
    }
}

function addSec() {
    if (timer.seconds < 59) {
        timer.seconds++;
        timer.setTimer();
    }
}

function subSec() {
    if (timer.seconds > 0) {
        timer.seconds--;
        timer.setTimer();
    }
}

function countdown() {
    startBttn.disable();
    timer.timeout = setTimeout(function() {
        if (timer.minutes == 0 && timer.seconds == 0) {
            clock.text('stop')
            startBttn.enable();
            return
        }
        if (timer.seconds > 0) {
            timer.seconds--;
        } else {
            timer.seconds = 59;
            timer.minutes--;
        }
        timer.setTimer();
        countdown();
    }, 1000);
}


function reset() {

    timer.minutes = 0;
    timer.seconds = 0;
    timer.setTimer();
    startBttn.enable();
}

function pad(num, size) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
}

function validate(input) {
    const res = input.match(regex)
    return res;
}

function toNubers(text) {
    const res = text.split(/[,.: ]/);
    return [Number(res[0]), Number(res[1])];
}

function getInput() {
    const text = inputField.value();
    const res = validate(text);
    if (text === '') {
        return
    }
    if (text && !res) {
        inputField.class('wrong');
    } else {
        inputField.value('');
        nums = toNubers(res[0]);
        timer.minutes = nums[0];
        timer.seconds = nums[1];
        timer.setTimer();
    }
}


const timer = new Timer();
timer.setTimer();

minMinusBttn.click(subMin);
minPlusBttn.click(addMin);
secMinusBttn.click(subSec);
secPlusBttn.click(addSec);
startBttn.click(countdown);
resettBttn.click(reset);
sendBttn.click(getInput);
