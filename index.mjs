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

function backspace() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
    if (document.getElementById('display').value === '') {
        document.getElementById('display').value = '0';
    }
}

function handleKeyPress(key) {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace', 'Escape'];

    if (validKeys.includes(key)) {
        switch (key) {
            case 'Enter':
            case '=':
                calculateResult();
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

document.addEventListener('keydown', function (event) {
    handleKeyPress(event.key);
});
