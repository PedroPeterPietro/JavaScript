var currentNumberWrapper1 = document.getElementById("currentNumber1"); //Numero Real
var currentNumber1 = 0;
var currentNumberWrapper2 = document.getElementById("currentNumber2"); //Numero Natural
var currentNumber2 = 0;
var currentNumberWrapper3 = document.getElementById("currentNumber3"); //Numero Real
var currentNumber3 = 0;
var currentNumberWrapper4 = document.getElementById("currentNumber4"); //Numero Natural
var currentNumber4 = 0;

function increment1() {
    if (currentNumber1 == 10) {
        return;
    } else {
        currentNumber1 = currentNumber1 + 1;
        currentNumberWrapper1.innerHTML = currentNumber1;
    }

}

function decrement1() {
    if (currentNumber1 == 0) {
        return;
    } else {
        currentNumber1 = currentNumber1 - 1;
        currentNumberWrapper1.innerHTML = currentNumber1;

    }

}

function changeColor() {
    if (currentNumber2 < 0) {
        document.getElementById("currentNumber2").style.color = "red";

    } else {
        document.getElementById("currentNumber2").style.color = "royalblue";
    }
}




function increment2() {
    currentNumber2 = currentNumber2 + 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
    changeColor();
}

function decrement2() {
    currentNumber2 = currentNumber2 - 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
    changeColor();

}

function increment3() {
    currentNumber3 = currentNumber3 + 2;
    currentNumberWrapper3.innerHTML = currentNumber3;
}

function decrement3() {
    currentNumber3 = currentNumber3 - 2;
    currentNumberWrapper3.innerHTML = currentNumber3;

}


function increment4() {
    currentNumber4 = currentNumber4 + 3;
    currentNumberWrapper4.innerHTML = currentNumber4;
}

function decrement4() {
    currentNumber4 = currentNumber4 - 3;
    currentNumberWrapper4.innerHTML = currentNumber4;

}