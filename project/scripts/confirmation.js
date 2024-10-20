import { createLastMondificationAndCurrentYear } from "../modules/lastmodified.js";
import { createHamburgerMenu } from "../modules/hamburger.js";
import { interestDisplay, resultDisplay } from "../modules/confirmationpage.js";


createHamburgerMenu();
createLastMondificationAndCurrentYear();
resultDisplay();
interestDisplay();