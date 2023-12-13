var displayDiv = document.querySelector("#display");
var currentInput = '0';
var operator = '';
var prevInput = '0';

function press(num) {
    if (currentInput === '0') {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    console.log("this is num.toString: " +num.toString());
    console.log("this is currentInput: "+currentInput);

    updateDisplay();
}

function setOP(op) {
    operator = op;
    prevInput = currentInput;
    currentInput = '0';
    console.log("prev: "+prevInput);
    console.log("current: "+currentInput);
}

function clr() {
    currentInput = '0';
    operator = '';
    prevInput = '0';
    updateDisplay();
}

function calculate() {
    var result;
    var num1 = parseFloat(prevInput);
    var num2 = parseFloat(currentInput);
    console.log("num1: " +num1);
    console.log("num2: " +num2);

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

    currentInput = result.toString();
    operator = '';
    prevInput = '0';
    updateDisplay();
}

function updateDisplay() {
    displayDiv.innerText = currentInput;
}