const activities = [];

// Select HTML Elements
function SelectElement(selector) {
  return document.getElementById(selector);
}

const age = SelectElement("age");
const gender = SelectElement("gender");
const weight = SelectElement("weight");
const height = SelectElement("height");
const selectOptions = SelectElement("select-option");
const content = SelectElement("content");
const result = SelectElement("result");
let BMR;
let value;

document.getElementById("select-option").addEventListener("change", (event) => {
  const getIndex = event.target.value.lastIndexOf(" ");
  const getInteger = +event.target.value.slice(getIndex).trim();
  value = getInteger;
});

function addFunctionality(event) {
  if (event.target.id === "btn") {
    if (gender.value.toLowerCase() === "male") {
      const heightToCentimeter = height.value * 12 * 2.54;
      const weightIntoKilometer = weight.value * 0.453592;
      const calCulateWeightTerm = 13.397 * weightIntoKilometer;
      const calculateHeightTerm = 4.799 * heightToCentimeter;
      const calculateAgeTerm = 5.677 * age.value;
      BMR =
        88.362 + calCulateWeightTerm + calculateHeightTerm - calculateAgeTerm;
    } else {
      const heightToCentimeter = height.value * 12 * 2.54;
      const weightIntoKilometer = weight.value * 0.453592;
      const calCulateWeightTerm = 9.247 * weightIntoKilometer;
      const calculateHeightTerm = 3.098 * heightToCentimeter;
      const calculateAgeTerm = 4.33 * age.value;
      BMR =
        447.593 + calCulateWeightTerm + calculateHeightTerm - calculateAgeTerm;
    }
  } else {
    return;
  }
  if (
    weight.value.trim() === "" ||
    height.value.trim() === "" ||
    age.value.trim() === "" ||
    gender.value.trim() === ""
  ) {
    alert("Please Fill All Input");
  } else {
    result.innerText = `Your Calorie ${BMR * value}`;
  }
}

// add Event On Main Container
content.addEventListener("click", addFunctionality);

// create Fragment;
const fragment = document.createDocumentFragment();
content.append(fragment);