const birthday = new Date("2000-10-27 14:32:00");

function updateAliveCounter() {
    const now = new Date();
    let diff = Math.floor((now - birthday) / 1000); // total seconds

    const days = Math.floor(diff / (60 * 60 * 24));
    diff -= days * 60 * 60 * 24;

    const hours = Math.floor(diff / (60 * 60));
    diff -= hours * 60 * 60;

    const minutes = Math.floor(diff / 60);
    diff -= minutes * 60;

    const seconds = diff;

    const display = document.getElementById("aliveCounter");
    if (display) {
        display.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

setInterval(updateAliveCounter, 1000);
updateAliveCounter();



const tab = document.getElementById("socialTab");
const label = document.getElementById("tabLabel");

label.addEventListener("click", () => {
    tab.classList.toggle("open");
});

