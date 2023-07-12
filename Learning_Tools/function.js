function calcular(x, op, y){
    console.log(op(x,y))
}

function adicao(x, y){
    return x+y
}

function subtracao(x, y){
    return x-y
}

function multiplicacao(x, y){
    return x*y
}

calcular(10, adicao, 20)
calcular(5, multiplicacao, 30)