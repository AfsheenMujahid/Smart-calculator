function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }


document.addEventListener('keydown', function (event) {
  handleKeyPress(event.key);
});

function handleKeyPress(key) {
  // Define keys that map to calculator actions
  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace', 'Escape'];

  if (validKeys.includes(key)) {
      // Special handling for specific keys
      switch (key) {
          case 'Enter':
          case '=':
              calculate();
              break;
          case 'Backspace':
              backspace();
              break;
          case 'Escape':
              clearDisplay();
              break;
          default:
              appendToDisplay(key);
              break;
      }
  }
}



