var numBinario = [];
var numDecimal;
var tipoNum;


tipoNum = prompt('Escolha o tipo do número digitado \n [1]-Decimal \n [2] Binario  ');

var numDigitado = prompt('Digite o número');

verificarNum(numDigitado);

if (tipoNum == 1) {
    numDecimal = numDigitado;

    transformadorBinario(tipoNum, numDecimal);
} else if (tipoNum == 2) {
    numBinario = numDigitado.split('');

    numBinario = numBinario.map(Number);

    transformadorDecimal(tipoNum, numBinario);

}


//Verifica se a string digitada pelo usuário é apenas composta de números.
function verificarNum() {

    if (isNaN(numDigitado)) {
        tipoNum = 0;
        return alert("O Número digitado possui caracteres, por favor insira novamente.");
    }
}


//Converte o npumero Decimal em Binário
function transformadorBinario() {
    numBinario = numBinario.splice(0, numBinario.length);
    let i = 0;

    while (i != 10000) {

        if (numDecimal % 2 == 0 && numDecimal > 1) {
            numDecimal = parseInt(numDecimal / 2);
            numBinario[i] = 0;
        } else if (numDecimal % 2 != 0 && numDecimal > 1) {
            numDecimal = parseInt(numDecimal / 2);
            numBinario[i] = 1;
        } else {
            numBinario[i] = 1;
            numBinario = numBinario.join('');
            return prompt("O numero digitado em binario é: " + numBinario);
        }

        i++;
    }

}

//Converte o npumero Decimal em Binário
function transformadorDecimal() {

    numDecimal = 0;
    //Verifica se o número digitado possui apenas 0 e 1.
    for (i = 0; i < numBinario.length; i++) {
        console.log(numBinario[i]);
        if (numBinario[i] != 0 && numBinario[i] != 1) {
            return alert("O Número binario digitado possui números diferentes de 0 e 1, por favor insira novamente.");
        }
    }

    for (i = numBinario.length; i > 0; i--) {
        numDecimal = numDecimal + ((2 ** (i - 1)) * numBinario[i - 1])
    }
    alert('Número Binario em Decimal: ' + numDecimal);

}