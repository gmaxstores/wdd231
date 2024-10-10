const currentyear = document.querySelector("#currentyear");
const last = document.querySelector("#lastModified");
const url = "https://gmaxstores.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector(".card");
const gridBt = document.querySelector(".grid");
const listBt = document.querySelector(".list");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const bmem = document.querySelector(".bmembers");
const wForecast = document.querySelector(".forecast");
const weatherDetails  = document.querySelector(".weather-details");
const weatherSection = document.querySelector(".w-section");
const fUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.20&lon=6.69&appid=71a9bbafef73b11db23d820d171a062a&units=metric';
const wUrl = "https://api.openweathermap.org/data/2.5/weather?lat=6.20&lon=6.69&appid=71a9bbafef73b11db23d820d171a062a&units=metric";

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


const today = new Date();
last.textContent = `Last Modification: ${document.lastModified}`;
currentyear.textContent = today.getFullYear();



hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});
getWeatherData();
async function getWeatherData() {
    try {
        const response = await fetch(wUrl);
        if (response.ok) {
            const data = await response.json();
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function getWeatherForecast() {
    try {
        const response = await fetch(fUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(wForecastt) {
    let todayForecast = document.createElement("p");
    let tomorrowForecast = document.createElement("p");
    let dayAfterTomorrowForecast = document.createElement("p");
    let todayDate = `${wForecastt.list[0].dt}`;
    let tomorrowDate = `${wForecastt.list[8].dt}`;
    let dayAfterTomorrowDate = `${wForecastt.list[16].dt}`;
    let newDate = new Date(todayDate * 1000);
    let newTomDate = new Date(tomorrowDate * 1000);
    let newDayDate = new Date(dayAfterTomorrowDate * 1000);
    let rTodayDate = newDate.toDateString();
    let realTomDate = newTomDate.toDateString();
    let realDayDate = newDayDate.toDateString();
    todayForecast.innerHTML = `${rTodayDate}: <span>${wForecastt.list[0].main.temp}&deg;C</span>`;
    tomorrowForecast.innerHTML = `${realTomDate}: <span>${wForecastt.list[8].main.temp}&deg;C</span>`;
    dayAfterTomorrowForecast.innerHTML = `${realDayDate}: <span>${wForecastt.list[16].main.temp}&deg;C</span>`;

    wForecast.appendChild(todayForecast);
    wForecast.appendChild(tomorrowForecast);
    wForecast.appendChild(dayAfterTomorrowForecast);
}

getWeatherForecast();
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function displayData(wData) {
    const iconSrc = `https://openweathermap.org/img/w/${wData.weather[0].icon}.png`;
    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", `${iconSrc}`);
    weatherIcon.setAttribute("alt", "weather icon")
    let wTemp = document.createElement("p");
    let wDesc = document.createElement("p");
    let wHigh = document.createElement("p");
    let wLow = document.createElement("p");
    let wHumidity = document.createElement("p");
    let wSunrise = document.createElement("p");
    let wSunset = document.createElement("p");
    wTemp.innerHTML = `${wData.main.temp}&deg;C`;
    let desc = `${wData.weather[0].description}`;
    let upperDesc = titleCase(desc);
    wDesc.textContent = `${upperDesc}`;
    wHigh.innerHTML = `${wData.main.temp_max}&deg;`;
    wLow.innerHTML = `${wData.main.temp_min}&deg;`;
    wHumidity.textContent = `${wData.main.humidity}%`;
    let wSunrisee = `${wData.sys.sunrise}`;
    let wSunsett = `${wData.sys.sunset}`;
    let dateR = new Date(wSunrisee * 1000);
    let dateS = new Date(wSunsett * 1000);
    let rSunrise = dateR.toLocaleTimeString();
    let rSunset = dateS.toLocaleTimeString();
    wSunrise.textContent = `${rSunrise}`;
    wSunset.textContent = `${rSunset}`;

    weatherSection.appendChild(weatherIcon);
    weatherDetails.appendChild(wTemp);
    weatherDetails.appendChild(wDesc);
    weatherDetails.appendChild(wHigh);
    weatherDetails.appendChild(wLow);
    weatherDetails.appendChild(wHumidity);
    weatherDetails.appendChild(wSunrise);
    weatherDetails.appendChild(wSunset);
}

async function getBusinessData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        createBusinessCards(data.companies);
    } catch (error) {
        console.log(error);
    }
}

async function getMemberData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        createMemberData(data.companies);
    } catch (error) {
        console.log(error);
    }
}
getMemberData();

function createMemberData(mcards) {
    bmem.innerHTML = "";
    let mList = [];
    
    
    mcards.forEach(mcard => {
        if (mcard.membershipLevel == 2 | mcard.membershipLevel == 1) {
            mList.push(mcard);
        }
    })
    let nmList = getRandom(mList, 3);
    nmList.forEach(nm => {
        let section = document.createElement("section");
        section.className = "msectionn";
        let div = document.createElement("div");
        div.className = "section-heading";
        let divf = document.createElement("div");
        divf.className = "subdiv";
        let divT = document.createElement("aside");
        divT.className = "section-heading-two";
        let divTh = document.createElement("aside");
        divTh.className = "section-heading-th";
        let bimage = document.createElement("img");
        let cname = document.createElement("p");
        let cphone = document.createElement("p");
        let caddress = document.createElement("p");
        let cwebsite = document.createElement("a");
        let cmlevel = document.createElement("p");
        let breakk = document.createElement("hr")
        cmlevel.className = "cmlevel";
        cwebsite.className = "cwebsite";
        caddress.className = "caddress";
        cphone.className = "cphone";
        cname.className = "cname";

        bimage.setAttribute("src", `images/${nm.image}`);
        bimage.setAttribute("alt", `${nm.name} Business Logo`);
        bimage.setAttribute("loading", "lazy");
        bimage.setAttribute("width", "64");
        bimage.setAttribute("height", "50");
        cname.textContent = `${nm.name}`;
        caddress.textContent = `${nm.addresses}`
        cphone.innerHTML = `<span>Phone: </span>${nm.phoneNumbers}`;
        cwebsite.setAttribute("href", `${nm.websiteURLS}`);
        cwebsite.textContent =`${nm.websiteURLS}`;
        if (nm.membershipLevel == 1) {
            cmlevel.textContent = "Gold Member";
        }
        else cmlevel.textContent = "Silver Member";
        div.textContent = `${nm.name}`;
        section.appendChild(div);
        section.appendChild(breakk);
        section.appendChild(divf);
        divf.appendChild(divTh);
        divf.appendChild(divT);
        divTh.appendChild(bimage);        
        divT.appendChild(cphone);
        divT.appendChild(cwebsite);
        divT.appendChild(caddress);
        divT.appendChild(cmlevel);
        bmem.appendChild(section);
    })

}
function getRandom(list, items){
    return list.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, items);
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
