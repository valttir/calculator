let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = "0";

const numbersDisplay = document.querySelector("#numbers");

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    displayValue = "0";
    cleared = true;
    numbersDisplay.textContent = displayValue;
})

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
    displayValue = numbersDisplay.textContent;
    displayValue = displayValue.slice(0, -1);
    if (displayValue.length < 1) {
        displayValue = 0;
        cleared = true;
    }
    numbersDisplay.textContent = displayValue;
})

const numButtons = document.querySelectorAll(".num");
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", () => {
        clickNumButton(numButtons[i].textContent);
    })
}

const opButtons = document.querySelectorAll(".op")
for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click", () => {
        clickOpButton(opButtons[i].textContent);
    })
}

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    clickEqualsButton();
})

function clickNumButton(num) {
    displayValue = numbersDisplay.textContent;
    if (cleared === true) {
        displayValue = "";
    }
    if (displayValue.length <= 10) {
        if (num === ".") {
            if (!displayValue.includes(".")) {
                displayValue += num;
            }
        } else {
            displayValue += num;
        }
    }
    numbersDisplay.textContent = displayValue;
}

function clickOpButton(op) {

}

function clickEqualsButton() {

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