let num1, num2;

function compara(num1, num2) {
    const primeiraFrase = verificarIgualdade(num1, num2);
    const segundaFrase = soma(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`
}

function verificarIgualdade(num1, num2) {
    let saoIguais = ''
    if (num1 !== num2) {
        saoIguais = "não";
    }
    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais`
}

function soma(num1, num2) {

    const total = num1 + num2;
    const compara10 = total >= 10;
    const compara20 = total >= 20;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    if (compara10) {
        if (total == 10) {
            resultado10 = 'igual';
        }
        resultado10 = 'maior';
    }
    if (compara20) {
        if (total == 20) {
            resultado20 = 'igual';
        } else {
            resultado20 = 'maior';
        }
    }

    return `Sua soma é ${total}, que é ${resultado10} quando comparado a 10 e ${resultado20} quando comparado a 20`
}

console.log(compara(10, 10));