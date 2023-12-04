let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

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
    if (display.textContent.length === 10) return;
    if (display.textContent === '0') display.textContent = '';
    display.textContent += number;
}

function appendPoint() {
    if (display.textContent.length === 10) return;
    if (display.textContent.includes('.')) return;
    display.textContent += '.';
}

function setOperator(operator) {

}

function evaluate() {

}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(a, op, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}