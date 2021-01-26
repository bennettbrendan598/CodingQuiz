// set countdown timer

const startingMinute = 1;
let time = startingMinute * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = time--;
}

// How to keep the timer continuous through each question??

// How to stop timer from going negative??

// How to keep and SAVE score??
