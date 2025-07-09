// Add a number or symbol to the calculator screen
function addToScreen(value) {
  document.getElementById("calc-screen").value += value;
}

// Clear everything on the screen
function clearScreen() {
  document.getElementById("calc-screen").value = "";
}

// Delete the last character (like backspace)
function deleteLastChar() {
  let screen = document.getElementById("calc-screen");
  screen.value = screen.value.slice(0, -1);
}

// Show the final result
function showAnswer() {
  try {
    let result = eval(document.getElementById("calc-screen").value);
    document.getElementById("calc-screen").value = result;
  } catch {
    document.getElementById("calc-screen").value = "Error";
  }
}
