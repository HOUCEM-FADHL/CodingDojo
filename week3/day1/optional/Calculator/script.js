// Selecting the display element in the HTML
var displayDiv = document.querySelector("#display");

// Initializing variables to manage calculator state
var currentInput = '0';
var operator = '';
var prevInput = '0';

// Function to handle number button presses
function press(num) {
    // If the current input is '0', replace it with the pressed number
    if (currentInput === '0') {
        currentInput = num.toString();
    } else {
        // Append the pressed number to the existing input
        currentInput += num.toString();
    }
    // Update the display
    updateDisplay();
}

// Function to set the operator when an operator button is pressed
function setOP(op) {
    // Save the current input as the previous input and reset the current input
    operator = op;
    prevInput = currentInput;
    currentInput = '0';
}

// Function to clear the calculator state
function clr() {
    currentInput = '0';
    operator = '';
    prevInput = '0';
    updateDisplay();
}

// Function to perform the calculation when the equals button is pressed
function calculate() {
    var result;

    // Parse the previous and current input as floats
    var num1 = parseFloat(prevInput);
    var num2 = parseFloat(currentInput);

    // Perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 0;
            break;
    }

    // Convert the result to a string and update the display
    currentInput = result.toString();
    operator = '';
    prevInput = '0';
    updateDisplay();
}

// Function to update the display with the current input
function updateDisplay() {
    displayDiv.innerText = currentInput;
}
