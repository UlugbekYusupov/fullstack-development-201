const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      calculateResult();
    } else {
      display.value += value;
    }
  });
});

function calculateResult() {
  try {
    let expression = display.value;

    expression = expression.replace(/%/g, "/100");

    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}