var currentNumberWrapper = [document.getElementById("currentNumber1"), document.getElementById("currentNumber2"), document.getElementById("currentNumber3"), document.getElementById("currentNumber4")];
let currentNumber = [0, 0, 0, 0];
var i;

//Função que incrementa +1 no primeiro contador
function increment1() {
    i = 0;
    currentNumber[0]++;
    currentNumberWrapper[i].innerHTML = currentNumber[0];
    verficarLimite();

}
//função que decrementa -1 no primeiro contador
function decrement1() {
    i = 0;

    currentNumber[0]--;
    verficarLimite();
    currentNumberWrapper[i].innerHTML = currentNumber[0];

}

//Função que verificar os limites <= 0 e >= 10 do count
function verficarLimite() {
    if (currentNumber[0] >= 10) {
        return currentNumber[0]--;
    }
    if (currentNumber[0] < 0) {
        return currentNumber[0]++;
    }
}

//Função que verificar se será preciso mudar a cor do elemento

function changeColor(i) {
    if (currentNumber[i] < 0) {
        currentNumberWrapper[i].style.color = "red";

    } else {
        currentNumberWrapper[i].style.color = "royalblue";
    }
}



//Função que incrementa +1 no segundo contador

function increment2() {
    i = 1;
    currentNumber[1] = currentNumber[1] + 1;
    currentNumberWrapper[i].innerHTML = currentNumber[1];
    changeColor(i);
}
//função que decrementa -1 no segundo contador

function decrement2() {
    i = 1;
    currentNumber[1] = currentNumber[1] - 1;
    currentNumberWrapper[i].innerHTML = currentNumber[1];
    changeColor(i);

}
//Função que incrementa +2 no terceiro contador

function increment3() {
    i = 2;
    currentNumber[2] = currentNumber[2] + 2;
    currentNumberWrapper[2].innerHTML = currentNumber[2];
    changeColor(i);
}
//função que decrementa -2 no terceiro contador

function decrement3() {
    i = 2;
    currentNumber[2] = currentNumber[2] - 2;
    currentNumberWrapper[2].innerHTML = currentNumber[2];
    changeColor(i);

}

//Função que incrementa +3 no quarto contador

function increment4() {
    i = 3;
    currentNumber[3] = currentNumber[3] + 3;
    currentNumberWrapper[3].innerHTML = currentNumber[3];
    changeColor(i);
}
//função que decrementa -3 no quarto contador

function decrement4() {
    i = 3;
    currentNumber[3] = currentNumber[3] - 3;
    currentNumberWrapper[3].innerHTML = currentNumber[3];
    changeColor(i);

}