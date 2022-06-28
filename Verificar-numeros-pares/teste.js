document.getElementById("botao").addEventListener("click", verificarNumPar)

function verificarNumPar() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    if (!num1 || !num2) {
        return alert("Algum dos números não foi digitado");

    }
    if (num1 % 2 == 0 && num2 % 2 == 0) {
        return alert("Os dois números são pares");
    } else if (num1 % 2 == 0) {
        return alert("O número 1 é par e o número 2 é impar");
    } else if (num2 % 2 == 0) {
        return alert("O número 2 é par e o número 1 é impar");
    } else {
        return alert("Os dois números são impares");
    }
}