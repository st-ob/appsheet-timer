// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
let repTimerSeconds = parseInt(urlParams.get('repTimerSeconds'), 10);
let breakTimerSeconds = parseInt(urlParams.get('breakTimerSeconds'), 10);
const returnUrl = urlParams.get('returnUrl');

const messageElement = document.getElementById('message');
const timerElement = document.getElementById('timer');

// Function to play beep sound
const playBeep = () => {
    const beep = new Audio('beep.mp3'); // Ensure you have a beep.mp3 file in your project
    beep.play();
};

// Function to start the timer
const startTimer = (duration, message, callback) => {
    let time = duration;
    messageElement.innerText = message;
    const interval = setInterval(() => {
        timerElement.innerText = time;
        if (time < 5) {
            document.body.style.backgroundColor = 'red';
            playBeep();
        } else {
            document.body.style.backgroundColor = '';
        }
        time--;
        if (time < 0) {
            clearInterval(interval);
            callback();
        }
    }, 1000);
};

// Function to handle the timers
const handleTimers = () => {
    if (repTimerSeconds > 0) {
        startTimer(repTimerSeconds, "Ausführung", () => {
            if (breakTimerSeconds > 0) {
                startTimer(breakTimerSeconds, "Pause", () => {
                    window.location.href = returnUrl;
                });
            } else {
                window.location.href = returnUrl;
            }
        });
    } else if (breakTimerSeconds > 0) {
        startTimer(breakTimerSeconds, "Pause", () => {
            window.location.href = returnUrl;
        });
    } else {
        window.location.href = returnUrl;
    }
};

// Start the process
handleTimers();
