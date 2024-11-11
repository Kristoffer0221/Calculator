let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue !== '') {
    const lastChar = displayValue[displayValue.length - 1];
    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
      displayValue += operator;
      updateDisplay();
    }
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  } finally {
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
