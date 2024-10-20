const wForecast = document.querySelector(".forecast");
const weatherDetails  = document.querySelector(".weather-details");
const weatherSection = document.querySelector(".w-section");
const fUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.20&lon=6.69&appid=71a9bbafef73b11db23d820d171a062a&units=metric';
const wUrl = "https://api.openweathermap.org/data/2.5/weather?lat=6.20&lon=6.69&appid=71a9bbafef73b11db23d820d171a062a&units=metric";

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
};

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
};

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
};


function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

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
};

export {getWeatherData, getWeatherForecast};