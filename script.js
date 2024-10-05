const urlParams = new URLSearchParams(window.location.search);
const startSeconds = parseInt(urlParams.get('seconds'), 10);

const countdown = () => {
    if (startSeconds <= 0) {
        clearInterval(timer);
        window.location.href = "https://your-appsheet-url.com";
    } else {
        document.getElementById('seconds').innerText = startSeconds;
        startSeconds--;
    }
};

const timer = setInterval(countdown, 1000);
