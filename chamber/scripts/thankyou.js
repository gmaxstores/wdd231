const formResult = document.querySelector(".form-result");
const result = window.location.href;
const formData = result.split("?")[1].split('&');
const currentyear = document.querySelector("#currentyear");
const last = document.querySelector("#lastModified");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

function createResult(res) {
    let fresult;
    formData.forEach((element) => {
        if (element.startsWith(res)) {
            fresult = element.split("=")[1].replace("%40", "@").replace("%2F", "/").replace("%2F", "/").replace("%2C+", " - ").replace("%3A", ":").replace("%3A", ":").replace("+", " ");
        }
    })
    return fresult
}

hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

formResult.innerHTML = `
<h2>Membership Details for ${createResult("firstname")} ${createResult("lastname")} <br> <span>${createResult("timestamp")}</span></h2>
<p>Email address: <a href="${createResult("email")}">${createResult("email")}</a></p>
<p>Phone Number: ${createResult("telephone")}</p>
<p>Organization Title: ${createResult("orgtitle")}</p>
<p>Organization/Business Name: ${createResult("orgname")}</p>
<p>Membership Level: ${createResult("level")}</p>
<p>Business Description: ${createResult("description")}</p>
`;

const today = new Date();
last.textContent = `Last Modification: ${document.lastModified}`;
currentyear.textContent = today.getFullYear();