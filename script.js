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

// ------------------
// CAROUSEL
// ------------------
let index = 0;
const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel-item");

document.getElementById("prevBtn").onclick = () => {
    index = (index <= 0) ? items.length - 1 : index - 1;
    carousel.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById("nextBtn").onclick = () => {
    index = (index >= items.length - 1) ? 0 : index + 1;
    carousel.style.transform = `translateX(-${index * 100}%)`;
};


// ------------------
// MEDIA TABS
// ------------------
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".tab-btn.active").classList.remove("active");
        btn.classList.add("active");

        document.querySelector(".tab-panel.active").classList.remove("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});