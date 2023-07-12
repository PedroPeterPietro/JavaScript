const pessoa = {
    nome:'Pedro',
    idade: "23"
}


function teste(prefixo){
    console.log(prefixo, this.nome)
}

teste()

teste.apply(pessoa, ["Olá"])
teste.call(pessoa, 'Ola')

