const join = document.querySelector("#join");
const enquire = document.querySelector("#enquire");
const paraDisplays = document.querySelectorAll(".display");
const radioPar = document.querySelector(".radio-par");
const stateOptions = document.querySelector("#select");
const nigerian = document.querySelector("#nigerian");
const displayState = document.querySelector(".display-state");
const selectP = document.querySelector(".select-p");
const nonNigerian = document.querySelector("#non-nigerian");
const displayCountry = document.querySelector(".display-country");
const displayQuestion = document.querySelector(".display-q");
const enquiryQuestion = document.querySelector(".enquiry-q");
const others = document.querySelector("#others");
const displayEnquiry = document.querySelector(".display-enquiry");
const timeStamp = document.querySelector("#timestamp");
const formContainer = document.querySelector(".form-container");
const country = document.querySelector("#country");
const guardianName = document.querySelector("#gname");
const resumptionOne = document.querySelector("#resumption-one");
const resumptionTwo = document.querySelector("#resumption-two");
const resumptionThree = document.querySelector("#resumption-three");
const resumptionFour = document.querySelector("#resumption-four");
const today = new Date();

function listenForSubmission() {
    formContainer.addEventListener("submit", () => {
        timeStamp.value = today.toLocaleString();
    });
}

function formListeners() {
    join.addEventListener("click", () => {
        guardianName.required = true;
        resumptionFour.required = true;
        resumptionOne.required = true;
        resumptionThree.required = true;
        resumptionTwo.required = true;
        enquiryQuestion.classList.remove("active");
        displayQuestion.classList.remove("active");
        paraDisplays.forEach(paraDisplay => {
            paraDisplay.classList.add("active");
        })
        radioPar.classList.add("active");
    });
    nigerian.addEventListener("click", () => {
        country.required = false;
        displayCountry.classList.remove("active");
        country.value = null
        stateOptions.required = true;
        selectP.classList.add("active");
        displayState.classList.add("active");
    });
    
    nonNigerian.addEventListener("click", () => {
        stateOptions.required = false;
        selectP.classList.remove("active");
        stateOptions.value = null;
        country.required = true;
        displayState.classList.remove("active");
        displayCountry.classList.add("active");
    });
    
    enquire.addEventListener("click", () => {
        guardianName.required = false;
        resumptionFour.required = false;
        resumptionOne.required = false;
        resumptionThree.required = false;
        resumptionTwo.required = false;
        paraDisplays.forEach(paraDisplay => {
            paraDisplay.classList.remove("active");
        })
        radioPar.classList.remove("active");
        enquiryQuestion.classList.add("active");
        displayQuestion.classList.add("active");
    });
    
    others.addEventListener("click", () => {
        displayEnquiry.classList.toggle("active");
    });
}


const states = [
    {
      id: "AB",
      name: "Abia",
    },
    {
      id: "AD",
      name: "Adamawa",
    },
    {
      id: "AK",
      name: "Akwa Ibom",
    },
    {
      id: "AN",
      name: "Anambra",
    },
    {
      id: "BY",
      name: "Bayelsa",
    },
    {
        id: "BE",
        name: "Benue",
    },
    {
        id: "BO",
        name: "Borno",
    },
    {
        id: "CR",
        name: "Cross River",
    },
    {
        id: "DE",
        name: "Delta",
    },
    {
        id: "EB",
        name: "Ebonyi",
    },
    {
        id: "ED",
        name: "Edo",
    },
    {
        id: "EK",
        name: "Ekiti",
    },
    {
        id: "EN",
        name: "Enugu",
    },
    {
        id: "GO",
        name: "Gombe",
    },
    {
        id: "IM",
        name: "Imo",
    },
    {
        id: "JI",
        name: "Jigawa",
    },
    {
        id: "KD",
        name: "Kaduna",
    },
    {
        id: "KN",
        name: "Kano",
    },
    {
        id: "KT",
        name: "Katsina",
    },
    {
        id: "KE",
        name: "Kebbi",
    },
    {
        id: "KO",
        name: "Kogi",
    },
    {
        id: "KW",
        name: "Kwara",
    },
    {
        id: "LA",
        name: "Lagos",
    },
    {
        id: "NA",
        name: "Nasarawa",
    },
    {
        id: "Ni",
        name: "Niger",
    },
    {
        id: "OG",
        name: "Ogun",
    },
    {
        id: "ON",
        name: "Ondo",
    },
    {
        id: "OS",
        name: "Osun",
    },
    {
        id: "OY",
        name: "Oyo",
    },
    {
        id: "PL",
        name: "Plateau",
    },
    {
      id: "RI",
      name: "Rivers",
    },
    {
        id: "SO",
        name: "Sokoto",
    },
    {
        id: "TA",
        name: "Taraba",
    },
    {
        id: "YO",
        name: "Yobe",
    },
    {
        id: "ZA",
        name: "Zamfara",
    },
    {
        id: "FCT",
        name: "Abuja",
    }
];

function displayStatesInSelect() {
    if (stateOptions) {
        states.forEach(state => {
            let node = document.createElement("option");
            node.textContent = state.name;
            stateOptions.appendChild(node);
        });
    } else {
        console.error("stateOptions is null");
    };
}

export {listenForSubmission, formListeners, displayStatesInSelect};