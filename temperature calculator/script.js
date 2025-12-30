let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let kelvinInput = document.getElementById("kelvin");

function convertTemperature(event) {
    let value = parseFloat(event.target.value);
    let inputid = event.target.id;

    if (inputid === "celsius") {
        kelvinInput.value = value + 273.15;
        fahrenheitInput.value = (value * 9/5) + 32;
    }

    else if (inputid === "fahrenheit") {
        celsiusInput.value = (value - 32) * 5/9;
        kelvinInput.value = (5/9 * (value - 32)) + 273.15;
    }

    else if (inputid === "kelvin") {
        celsiusInput.value = (value - 273.15);
        fahrenheitInput.value = (value- 273.15) * 9/5 + 32;
    }

    else {
        console.log("Invalid input. Please enter a valid temperature.");
    }
 }