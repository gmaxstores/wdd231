const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");
const url = "https://gmaxstores.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector(".card");
const gridBt = document.querySelector(".grid");
const listBt = document.querySelector(".list");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

const today = new Date();
last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
currentyear.innerHTML = today.getFullYear();

hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    createBusinessCards(data.companies);

}

gridBt.addEventListener("click", () => {
    getBusinessData();
    cards.classList.remove("card");
	cards.classList.add("gridd");
	cards.classList.remove("listt");
});

async function getBusinessDataL() {
    const response = await fetch(url);
    const data = await response.json();
    createBusinessCardsL(data.companies);

}
listBt.addEventListener("click", () => {
    getBusinessDataL();
    cards.classList.remove("card");
    cards.classList.add("listt")
    cards.classList.remove("gridd");
});

getBusinessData();

function createBusinessCards(bcards) {
    cards.innerHTML = "";
    bcards.forEach(bcard => {
        let section = document.createElement("section");
        let bimage = document.createElement("img");
        let paraO = document.createElement("p");
        let paraT = document.createElement("p");
        let paraTh = document.createElement("a");

        bimage.setAttribute("src", `images/${bcard.image}`);
        bimage.setAttribute("alt", `${bcard.name} Business Logo`);
        bimage.setAttribute("loading", "lazy");
        bimage.setAttribute("width", "64");
        bimage.setAttribute("height", "50");
        paraO.textContent = `${bcard.addresses}`;
        paraT.textContent = `${bcard.phoneNumbers}`;
        paraTh.setAttribute("href", `${bcard.websiteURLS}`);
        paraTh.textContent =`${bcard.websiteURLS}`;

        section.appendChild(bimage);
        section.appendChild(paraO);
        section.appendChild(paraT);
        section.appendChild(paraTh);

        cards.appendChild(section);
    });
}

function createBusinessCardsL(bcards) {
    cards.innerHTML = "";
    bcards.forEach(bcard => {
        let section = document.createElement("section");
        let name = document.createElement("p");
        let paraO = document.createElement("p");
        let paraT = document.createElement("p");
        let paraTh = document.createElement("a");

        name.textContent = `${bcard.name}`;
        paraO.textContent = `${bcard.addresses}`;
        paraT.textContent = `${bcard.phoneNumbers}`;
        paraTh.setAttribute("href", `${bcard.websiteURLS}`);
        paraTh.textContent =`${bcard.websiteURLS}`;

        section.appendChild(name);
        section.appendChild(paraO);
        section.appendChild(paraT);
        section.appendChild(paraTh);

        cards.appendChild(section);
    });
}
