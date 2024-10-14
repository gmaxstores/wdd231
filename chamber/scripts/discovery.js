const lastVisited = document.querySelector(".last-visited")
const currentyear = document.querySelector("#currentyear");
const last = document.querySelector("#lastModified");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;


const today = new Date();
if (localStorage.getItem("visitDate") == null) {
    lastVisited.textContent = "Welcome, let us know if you have any questions."
    localStorage.setItem("visitDate", today.getTime());
}
else {
    const lastVisitTime = localStorage.getItem("visitDate");
    let diff = today.getTime() - lastVisitTime
    diff = diff/day;
    if (diff <= 24) {
        lastVisited.innerHTML = "Back so Soon! <br> Awesome!"
    }
    else {
        lastVisited.textContent = `You Last vsisted ${Math.round(diff)}`
    }
    
}

last.textContent = `Last Modification: ${document.lastModified}`;
currentyear.textContent = today.getFullYear();



hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}