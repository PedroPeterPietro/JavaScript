const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const verValor = (elemento, i , listRef) =>{
    console.log(elemento, i, listRef)
}

const verPares = (elemento, i) => {
    if(elemento % 2 == 0){
        console.log(`O numero ${elemento}, que está na posição ${i}, é par`)
    }
}

const retornarPares = (elemento, i) => {
     return (elemento % 2 == 0)
}

// For Each exemplos
list.forEach(verValor)
list.forEach(verPares)

// Filter exemplos
numPares = list.filter(retornarPares)
console.log(numPares)

// map exemplo
class pessoa {
    constructor(name, idade){
        this.name = name
        this.idade = idade
    }
}
listaPessoas = [ new pessoa('Pedro', "12"),new pessoa('José', '15'),new pessoa('Thais', '18'),new pessoa('Henrique', '23'),new pessoa('Juliana', '32')]
const retornaIdx = (value, i) => { console.log(`${i} indice da pessoa: ${value.name}`)}
const retornarIdade = (value, i) => {console.log(`Idade ${value.idade}`)}

listaPessoas.map(retornaIdx)
listaPessoas.map(retornarIdade)
console.log(listaPessoas.map((value) => {
    return value.name
}))


// Exemplo Reduce

const somarNum =  (valeuBefore, currentValue) => {
    return valeuBefore+currentValue
}

somaTotal = list.reduce(somarNum)

console.log(somaTotal)