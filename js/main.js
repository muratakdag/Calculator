// Start writing JavaScript
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;

  //  Is this a number key?
  if (key.classList.contains("number")) {
    if (displayValue === "0") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  //  Is this an operator key?
  if (key.classList.contains("operator")) {
    calculator.dataset.previousKeyType = "operator";
  }
});
