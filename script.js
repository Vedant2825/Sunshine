const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("April 1 2026 00:00:00").getTime();

function timer () {

    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    if (distance <= 0) {

        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";

        document.getElementById("amx").innerHTML =
        "TIME FOR UR SURPRISE MY SUNSHINEEEEEE <33";

        document.getElementById("surpriseContainer")
        .classList.remove("hidden");

        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(distance / (1000 * 60)) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

function goToMessage(){
    window.location.href =
    "https://vedant2825.github.io/Message/Message.html";
}

const interval = setInterval(timer, 1000);
