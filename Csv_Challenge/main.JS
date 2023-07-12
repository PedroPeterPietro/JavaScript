const { error } = require('console')
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'teste.csv')
const promessaDaLeituraArq = fs.promises.readFile(filePath)


// promessaDaLeituraArq
//     .then((arquivo) => arquivo.toString('utf8'))
//     .then((texto) => texto.split('\n').slice(1))
//     .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) =>{
//         const [nome, feito] = linha.split(';');
//         return{
//             nome,
//             feito: feito.trim() === 'true'
//         }
//     }))
//     .then((listaDeTarefas) => console.log(listaDeTarefas))
//     .catch((error) => console.log("Aconteceu Algum erro"))
//     .finally(() =>{console.log("Ação executada!") })


async function buscarArquivo(){
   
    try{
    const arquivo = await fs.promises.readFile(filePath)
    
    let str = arquivo.toString('utf-8')
    
    console.log(str)
    } catch(error){
        console.log(error)
    } finally{
        console.log('Ação Executada')
    }


}

buscarArquivo()