const goldLevel = document.querySelector(".goldlevel");
const goldBtn = document.querySelector(".goldbtn");
const bronzeLevel = document.querySelector(".bronzelevel");
const npLevel = document.querySelector(".nplevel");
const bronzeBtn = document.querySelector(".bronzebtn");
const npBtn = document.querySelector(".npbtn");
const silverBtn = document.querySelector(".silverbtn");
const silverLevel = document.querySelector(".silverlevel");
const closebtn = document.querySelector(".closebtn");
const bronzeClosebtn = document.querySelector(".bronze-closebtn");
const npClosebtn = document.querySelector(".np-closebtn");
const silverClosebtn = document.querySelector(".silver-closebtn");
const submitBtn = document.querySelector("#submit-btn");
const timeStamp = document.querySelector("#timestamp");
const formContainer = document.querySelector(".form-container");
const currentyear = document.querySelector("#currentyear");
const last = document.querySelector("#lastModified");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

goldBtn.addEventListener("click", () => {
    goldLevel.showModal();
})
npBtn.addEventListener("click", () => {
    npLevel.showModal();
})
bronzeBtn.addEventListener("click", () => {
    bronzeLevel.showModal();
})
silverBtn.addEventListener("click", () => {
    silverLevel.showModal();
})
closebtn.addEventListener("click", () => {
    goldLevel.close();
})
silverClosebtn.addEventListener("click", () => {
    silverLevel.close();
})
bronzeClosebtn.addEventListener("click", () => {
    bronzeLevel.close();
})
npClosebtn.addEventListener("click", () => {
    npLevel.close();
})

formContainer.addEventListener("submit", () => {
    timeStamp.value = today.toLocaleString();
})

const today = new Date();
last.textContent = `Last Modification: ${document.lastModified}`;
currentyear.textContent = today.getFullYear();



hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});