import { createLastMondificationAndCurrentYear } from "../modules/lastmodified.js";
import { createHamburgerMenu } from "../modules/hamburger.js";
import { lastVisistedDisplay } from "../modules/lastvisited.js";
import { getWeatherData, getWeatherForecast } from "../modules/weatherforecast.js";


createHamburgerMenu();
createLastMondificationAndCurrentYear();
lastVisistedDisplay();
getWeatherData();
getWeatherForecast();