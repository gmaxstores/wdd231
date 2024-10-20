const lastVisited = document.querySelector(".last-visited");
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
const today = new Date();

function lastVisistedDisplay() {
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
        };
        
    };
};

export {today, lastVisited, minute, hour, day, year, lastVisistedDisplay}