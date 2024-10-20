const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

function createHamburgerMenu() {
    hamButton.addEventListener("click", () => {
        nav.classList.toggle("show");
        hamButton.classList.toggle("show");
    });
};

export {hamButton, nav, createHamburgerMenu};