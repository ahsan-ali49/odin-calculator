//  Addition Function
function add(numA, numB) {
  return numA + numB;
}

//  Subtraction Function
function subtract(numA, numB) {
  return numA - numB;
}

//  Multiplication Function
function multiply(numA, numB) {
  return numA * numB;
}

//  Division Function
function divide(numA, numB) {
  return numA / numB;
}

// Operate Function; gets appropriate function
function operate(numA, numB, operater) {
  switch (operater) {
    case "+":
      return add(numA, numB);
      break;
    case "-":
      return subtract(numA, numB);
      break;
    case "*":
      return multiply(numA, numB);
      break;
    case "/":
      return divide(numA, numB);
      break;
  }
}

let numA = 1;
let numB = 1;
let operator = "";
let times = 0;
const displayDiv = document.querySelector("#screen");
let showText = "";
let oprSign = ["+", "-", "*", "/"];

//  Display Function

function displayNum(btn) {
  numB = numB * times + +btn.textContent;
  times = 10;
  showText += btn.textContent;
  if (showText.length >= 16) {
    adjustScreen(showText);
  } else displayDiv.textContent = showText;
}

function displayOpr(btn) {
  if (operator == "") {
    operator = btn.textContent;
    showText += btn.textContent;
    if (showText.length >= 16) {
      adjustScreen(showText);
    } else displayDiv.textContent = showText;
    numA = numB;
    numB = 1;
    times = 0;
  } else if (
    !oprSign.includes(showText.substring(showText.length - 1, showText.length))
  ) {
    numB = operate(numA, numB, operator);
    operator = btn.textContent;
    showText = numB + btn.textContent;
    displayDiv.textContent = showText;
    numA = numB;
    numB = 1;
    times = 0;
  } else {
    removeElement();
    operator = btn.textContent;
    showText += btn.textContent;
    if (showText.length >= 16) {
      adjustScreen(showText);
    } else displayDiv.textContent = showText;
  }
}
function display(btn) {
  if (
    !oprSign.includes(showText.substring(showText.length - 1, showText.length))
  ) {
    if (operator != "") {
      numB = operate(numA, numB, operator);
      numB = numB.toFixed(2);
      showText = numB.toString();
      if (numB > 999999999999999) {
        alert("Number is Too Large!");
        clearScreen();
      } else if (showText.length >= 16) {
        numB = Math.round(numB);
        showText = numB;
        displayDiv.textContent = showText;
      } else displayDiv.textContent = showText;
      operator = "";
    }
  } else alert("Enter another Number as well!");
}
function removeElement() {
  let lastNum = showText[showText.length - 1];
  showText = showText.substring(0, showText.length - 1);
  if (showText.length >= 16) {
    adjustScreen(showText);
  } else displayDiv.textContent = showText;
  if (times != 0 && !oprSign.includes(lastNum)) {
    numB = numB - +lastNum;
    numB = numB / times;
  } else {
    operator = "";
    numB = numA;
  }
}

function clearScreen() {
  displayDiv.textContent = showText = "";
  numA = 1;
  numB = 1;
  operator = "";
  times = 0;
}

function adjustScreen(showText) {
  let startIndex = showText.length - 15;
  let endIndex = showText.length;
  displayDiv.textContent = showText.substring(startIndex, endIndex);
}

//  Event Listeners
const numbers = document.querySelectorAll(".nmbr");
numbers.forEach((num) => {
  num.addEventListener("click", () => displayNum(num));
});

const operators = document.querySelectorAll(".opr");
operators.forEach((opr) => {
  opr.addEventListener("click", () => displayOpr(opr));
});

const clr = document.querySelector("#clr");
clr.addEventListener("click", clearScreen);

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => display(equal));

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", removeElement);
