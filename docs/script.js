 
 
 
const birthday = new Date("2000-10-27 14:32:00");

function updateAliveCounter() {
    const now = new Date();
    let diff = Math.floor((now - birthday) / 1000);

    const days = Math.floor(diff / (60 * 60 * 24));
    diff -= days * 60 * 60 * 24;

    const hours = Math.floor(diff / (60 * 60));
    diff -= hours * 60 * 60;

    const minutes = Math.floor(diff / 60);
    diff -= minutes * 60;

    const seconds = diff;

    const display = document.getElementById("aliveCounter");
    if (display) {
        display.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

setInterval(updateAliveCounter, 1000);
updateAliveCounter();

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {

         
        document.querySelector(".tab-btn.active")?.classList.remove("active");
        btn.classList.add("active");

         
        document.querySelector(".tab-panel.active")?.classList.remove("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});
