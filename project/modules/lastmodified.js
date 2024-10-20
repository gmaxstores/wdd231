const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");
const today = new Date();
function createLastMondificationAndCurrentYear() {
    last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
    currentyear.innerHTML = today.getFullYear();
}

export {today, currentyear, last, createLastMondificationAndCurrentYear};