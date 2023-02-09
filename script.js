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
      add(numA, numB);
      break;
    case "-":
      subtract(numA, numB);
      break;
    case "*":
      multiply(numA, numB);
      break;
    case "/":
      divide(numA / numB);
      break;
  }
}

//  Display Function
function display(btn) {
  console.log(btn.textContent);
  const displayDiv = document.querySelector("#screen");
  displayDiv.textContent += btn.textContent;
  if ((operator == ""))
    numA = btn.textContent
}

//  variables
let numA, numB, operator, operatorArray = ["+", "-", "*", "/"];

//  Event Listeners
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => display(btn));
});
