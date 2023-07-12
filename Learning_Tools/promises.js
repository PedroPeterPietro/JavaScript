const numPar= new Promise((resolve, reject) =>{
    const elemento = parseInt(Math.random()*10)
    
    if(elemento % 2 == 0){
        resolve(elemento)
    } else {
        reject(`O numero ${elemento} não é par`)
    }
})



numPar
    .then((value) =>{
        console.log(value)
        return value+11
    })
    .then((value) =>{
        console.log(value)
    })
    .catch((erro) =>{
        console.error(erro)
    })
    .finally(() =>{
        console.log("Finalizado")
    })