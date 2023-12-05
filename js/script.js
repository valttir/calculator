let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetScreen = false;

const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalsButton = document.querySelector("#equals");
const pointButton = document.querySelector("#point");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".op")

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
equalsButton.addEventListener("click", evaluate);
pointButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
    button.addEventListener('click', () => 
    appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () =>
    setOperator(button.textContent))
)

function clear() {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function deleteNumber() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent.length < 1) {
        display.textContent = '0';
    }
}

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetScreen) {
        resetScreen();
    };
    if (display.textContent.length === 10) return;
    display.textContent += number;
}

function resetScreen() {
    display.textContent = ''
    shouldResetScreen = false
  }

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (display.textContent.length === 10) return;
    if (display.textContent.includes('.')) return;
    display.textContent += '.';
}

function setOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstOperand = display.textContent;
    currentOperator = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetScreen) return;
    if (currentOperator === '÷' && display.textContent === '0') {
        shouldResetScreen = true;
    }
    secondOperand = display.textContent;
    let result =
    operate(firstOperand, currentOperator, secondOperand);
    result = handleResult(result);
    console.log(result);
    display.textContent = result;
    currentOperator = null;
    shouldResetScreen = true;
}

function handleResult (result) {
    if (String(result).includes('.')) {
        // TODO: variable rounding
        return Math.round(result * 1000) / 1000;
    } else if (String(result).length > 10) {
        shouldResetScreen = true;
        return "overflow";
    } else {
        return result;
    }
}

function operate(a, operator, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

