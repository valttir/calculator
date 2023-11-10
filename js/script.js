let displayValue = "";
let storedValue = "";
let operator =  "+";

const numbersDisplay = document.querySelector("#numbers");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".op")
const equalsButton = document.querySelector("#equals");

clearButton.addEventListener("click", () => {
    displayValue = "";
    numbersDisplay.textContent = displayValue;
})

deleteButton.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    numbersDisplay.textContent = displayValue;
})

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", () => {
        clickNumButton(numButtons[i].textContent)
    })
}

for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click", () => {
        clickOpButton(opButtons[i].textContent)
    })
}

equalsButton.addEventListener("click", () => {
    operate();
})

function clickNumButton(num) {
    if (displayValue.length <= 10) {
        if (num === ".") {
            if (!displayValue.includes(".")) {
                displayValue += num;
                numbersDisplay.textContent = displayValue;
            }
        } else {
            displayValue += num;
            numbersDisplay.textContent = displayValue;
        }
    }
}

function clickOpButton(op) {
    storedValue = displayValue;
    operator = op;
    displayValue = "";
}

function add(a, b) {
    storedValue = Number(a) + Number(b);
    storedValue = storedValue.toString()
    numbersDisplay.textContent = storedValue
}

function subtract(a, b) {
    storedValue = Number(a) - Number(b);
    storedValue = storedValue.toString()
    numbersDisplay.textContent = storedValue
}

function multiply(a, b) {
    storedValue = Number(a) * Number(b);
    storedValue = storedValue.toString()
    numbersDisplay.textContent = storedValue
}

function divide(a, b) {
    storedValue = Number(a) / Number(b);
    storedValue = storedValue.toString()
    numbersDisplay.textContent = storedValue
}

function operate() {
    switch (operator) {
        case "+":
            add(storedValue, displayValue);
            break;
        case "-":
            subtract(storedValue, displayValue);
            break;
        case "x":
            multiply(storedValue, displayValue);
            break;
        case "/":
            divide(storedValue, displayValue);
            break;
    }
}

