const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("February 22 2026 23:28:00").getTime();

function timer(){

    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    if(distance <= 0){

        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";

        const surprise = document.getElementById("surpriseContainer");

        surprise.classList.remove("hidden");

        // small delay so transition triggers properly
        setTimeout(() => {
            surprise.classList.add("show");
        }, 50);

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
    window.location.href = "https://vedant2825.github.io/Sunshine/wensite2.html";
}

const interval = setInterval(timer, 1000);




