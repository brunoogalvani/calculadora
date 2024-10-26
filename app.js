let display = document.querySelector('.visor');

function inserirDisplay(input) {
    display.value += input;
}

function limparDisplay() {
    display.value = "";
}

function calcular() {
    if (!display.value) {
        display.value = "";
    } else {
        try {
            display.value = eval(display.value);
        } catch(error) {
            display.value = "Error";
        }
    }
}