const urlParams = new URLSearchParams(window.location.search);
let startSeconds = parseInt(urlParams.get('seconds'), 10);
const returnUrl = urlParams.get('returnUrl');

const countdown = () => {
    if (startSeconds <= 0) {
        clearInterval(timer);
        window.location.href = returnUrl;
    } else {
        document.getElementById('seconds').innerText = startSeconds;
        startSeconds--;
    }
};

const timer = setInterval(countdown, 1000);
