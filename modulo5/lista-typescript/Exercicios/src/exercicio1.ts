
const pessoa = {
    nome: 'Diego',
    dataDeNasci:'18/07/1999'
}

const diaSplit = pessoa.dataDeNasci.split('/')
const mesSplit = pessoa.dataDeNasci.split('/')
const anoSplit = pessoa.dataDeNasci.split('/')

console.log(`Olá me chamo ${pessoa.nome},nasci no dia ${diaSplit[0]} do mês de ${mesSplit[1]} do ano de ${anoSplit[2]}`)

 