let displayValue = "";
let a;
let operator;
let b;

const numbersDisplay = document.querySelector("#numbers");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".op")


for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", () => {
        clickNumButton(numButtons[i].textContent)
    })
}



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

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

