function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Hata!";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const display = document.getElementById("display");

  if (!isNaN(key) || key === ".") {
    appendToDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
