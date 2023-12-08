// Function to hide the cookie message
function hide() {
    var cookie = document.querySelector(".cookies");
    cookie.style.display = "none";
}

// Selecting elements with class "red" and "blue" to represent temperature values
var redtemp = document.querySelectorAll(".red");
var bluetemp = document.querySelectorAll(".blue");

// Arrays to store initial temperature values in Celsius and Fahrenheit
var redArray = ["75°", "80°", "69°", "78°"];
var blueArray = ["65°", "66°", "61°", "70°"];

// Arrays to store initial temperature values for later reference
var r = [];
var b = [];

// Function to initialize and store initial temperature values
function init() {
    for (var i = 0; i < 4; i++) {
        r.push(redtemp[i].innerText);
        b.push(bluetemp[i].innerText);
    }
}

// Call the init function to set the initial values
init();

// Function to change temperature values based on the selected unit
function change_temp(element) {
    if (element.value === "farahd") {
        // Display temperatures in Fahrenheit
        for (var i = 0; i < 4; i++) {
            redtemp[i].innerText = redArray[i];
            bluetemp[i].innerText = blueArray[i];
        }
    } else {
        // Display temperatures in Celsius
        for (var i = 0; i < 4; i++) {
            redtemp[i].innerText = r[i];
            bluetemp[i].innerText = b[i];
        }
    }
}
