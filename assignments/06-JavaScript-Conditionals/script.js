/*Matthew Hurst | CSCE 242*/

const toggleNav = () =>{
    document.getElementById("main-nav-items").classList.toggle("hidden");
    document.getElementById("nav-toggle").classList.toggle("closed");
}
const showExercise1 = () => {
    document.getElementById("exercise1").classList.remove("hidden");
    document.getElementById("exercise2").classList.add("hidden");

    document.getElementById("main-nav-items").classList.add("hidden");
    document.getElementById("nav-toggle").classList.remove("closed");
};

const showExercise2 = () => {
    document.getElementById("exercise2").classList.remove("hidden");
    document.getElementById("exercise1").classList.add("hidden");

    document.getElementById("main-nav-items").classList.add("hidden");
    document.getElementById("nav-toggle").classList.remove("closed");
};

const updateSliderMessage = () => {
    const slider = document.getElementById("minutesSlider");
    const valueSpan = document.getElementById("minutesValue");
    const msg = document.getElementById("sliderMessage");

    const mins = parseInt(slider.value);
    valueSpan.textContent = mins;

    if (mins > 45) {
        msg.textContent = "Plenty of time";
    } else if (mins >= 30) {
        msg.textContent = "Were chilling";
    } else if (mins >= 15) {
        msg.textContent = "Time to get moving";
    } else {
        msg.textContent = "Less than 15 minutes. Time to Hurry!";
    }
};

const checkCountdown = () => {
    const output = document.getElementById("countdownMessage");

    const now = new Date();

    const classTime = new Date();
    classTime.setHours(8, 30, 0, 0);

    const diffMs = classTime - now;
    const diffMins = Math.round(diffMs / 60000);

    let message = `Class time is 8:30 AM. `;

    if (diffMins > 15) {
        message += `You have ${diffMins} minutes — relax, you’re early!`;
    } else if (diffMins >= 10) {
        message += `You have ${diffMins} minutes — start heading out soon!`;
    } else if (diffMins >= 5) {
        message += `You have ${diffMins} minutes — grab your stuff NOW!`;
    } else if (diffMins >= 0) {
        message += `You have ${diffMins} minutes — RUN`;
    } else {
        // class already started
        const late = Math.abs(diffMins);

        if (late <= 5) {
            message += `Class started ${late} minutes ago, sneak in`;
        } else if (late <= 15) {
            message += `Class started ${late} minutes ago, make up an excuse`;
        } else {
            message += `Class started ${late} minutes ago, might just want to skip at this point`;
        }
    }
    output.textContent = message;
};

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;

    document.getElementById("link-ex1").onclick = showExercise1;
    document.getElementById("link-ex2").onclick = showExercise2;

    const slider = document.getElementById("minutesSlider");
    slider.addEventListener("input", updateSliderMessage);
    updateSliderMessage();

    document.getElementById("checkTimeBtn").onclick = checkCountdown;
};