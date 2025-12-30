let dateInput = document.getElementById("birthDate");
let ageDisplay = document.getElementById("h4");
let button = document.getElementById("button");

button.addEventListener("click", function dateCalculator(e) {
  e.preventDefault();
  let birthDay = new Date(dateInput.value);
  if (isNaN(birthDay)) {
    ageDisplay.innerHTML = "Please enter a valid date.";
    return;
  }

  let initialday = new Date();
  let age = initialday.getFullYear() - birthDay.getFullYear();
  let monthDiff = initialday.getMonth() - birthDay.getMonth();
  console.log(monthDiff);
  let dayDiff = initialday.getDate() - birthDay.getDate();
  if (monthDiff < 0) {
    age--;
  } else if (monthDiff === 0) {
    if (dayDiff < 0) {
      age--;
    }
  }

  if (age < 0) {
    ageDisplay.innerHTML = "Birth date is in the future! &#128514";
    return;
  }

  switch (age) {
    case 0:
      ageDisplay.innerHTML = `You are ${monthDiff} month(s) old`;
      break;
    case 1:
      ageDisplay.innerHTML = "You are 1 year old";
      break;

    default:
      ageDisplay.innerHTML = `You are <span>${age}</span> years old`;
      break;
  }
});
