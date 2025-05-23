function calculo(num1, num2, operacao) {
    if (operacao === 'soma') {
        return num1 + num2;
    } else if (operacao === 'subtração') {
        return num1 - num2;
    } else {
        return null;
    }
}

function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;

    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerText = "Por favor, insira números válidos.";
        return;
    }

    const resultado = calculo(num1, num2, operacao);

    if (resultado !== null) {
        resultadoDiv.innerText = `O resultado é: ${resultado}.`;
    } else {
        resultadoDiv.innerText = "Operação inválida.";
    }
}