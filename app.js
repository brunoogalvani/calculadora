let display = document.querySelector('.visor');

function inserirDisplay(input) {
    if (display.value == "Error") {
        display.value = "";
    }
    display.value += input;
}

function limparDisplay() {
    display.value = "";
}

function calcular() {
    if (!display.value.includes("+") & !display.value.includes("-") & !display.value.includes("/") & !display.value.includes("*")) {
        display.value = "";
    } else {
        try {
            display.value = eval(display.value);
        } catch(error) {
            display.value = "Error";
        }
    }
}