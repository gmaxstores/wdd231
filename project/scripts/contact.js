import { createLastMondificationAndCurrentYear } from "../modules/lastmodified.js";
import { createHamburgerMenu } from "../modules/hamburger.js";
import { formListeners, displayStatesInSelect, listenForSubmission } from "../modules/contactus.js";


createHamburgerMenu();
createLastMondificationAndCurrentYear();
displayStatesInSelect();
listenForSubmission();
formListeners();