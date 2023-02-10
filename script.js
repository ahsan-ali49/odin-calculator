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

let numA = 1,
  numB = 1,
  operator = "",
  times = 0;

//  Display Function
function display(btn) {
  const displayDiv = document.querySelector("#screen");
  if (btn.id == "clr") {
    displayDiv.textContent = "";
    numA = 1;
    numB = 1;
    operator = "";
    times = 0;
  } else if (btn.className == "nmbr") {
    numB = numB * times + +btn.textContent;
    times = 10;
    console.log(numB);
    displayDiv.textContent += btn.textContent;
  } else if (btn.className == "opr") {
    if (operator == "") {
      operator = btn.textContent;
      console.log(operator);
      displayDiv.textContent += btn.textContent;
      numA = numB;
      numB = 1;
      times = 0;
    } else {
      numB = operate(numA, numB, operator);
      operator = btn.textContent;
      displayDiv.textContent = numB + btn.textContent;
      numA = numB;
      numB = 1;
      times = 0;
    }
  } else if (btn.id == "equal" && operator != "") {
    console.log(
      "NumA: " + numA + "  numB: " + numB + "  operator: " + operator
    );
    numB = operate(numA, numB, operator);
    displayDiv.textContent = numB;
    operator = "";
  }
}

function removeElement(backspace) {
  const displayDiv = document.querySelector("#screen");
  let lastNum = displayDiv.textContent[displayDiv.textContent.length - 1];
  console.log(lastNum);
  displayDiv.textContent = displayDiv.textContent.substring(
    0,
    displayDiv.textContent.length - 1
  );
  if (times != 0) {
    numB = numB - +lastNum;
    numB = numB / times;
    console.log("Hello NumB: " + numB);
  }
}

//  Event Listeners
const numbers = document.querySelectorAll(".nmbr");
numbers.forEach((num) => {
  num.addEventListener("click", () => display(num));
});

const operators = document.querySelectorAll(".opr");
operators.forEach((opr) => {
  opr.addEventListener("click", () => display(opr));
});

const clr = document.querySelector("#clr");
clr.addEventListener("click", () => display(clr));

const eqaul = document.querySelector("#equal");
eqaul.addEventListener("click", () => display(eqaul));

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => removeElement(backspace));
