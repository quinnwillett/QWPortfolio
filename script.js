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

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const captionElement = document.getElementById("carousel-caption");

let index = 0;

// Your custom captions
const captions = [
  "Caption for image 1",
  "Caption for image 2",
  "Caption for image 3"
];

function updateSlide() {
  track.style.transform = `translateX(${-index * 100}%)`;
  captionElement.textContent = captions[index];  // update caption
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

// Initialize starting caption
updateSlide();
