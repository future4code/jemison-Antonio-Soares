type Persona = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum Cores {
    AMARELO = 'AMARELO',
    AZUL = 'AZUL',
    ROSA ='ROSA'
}

const pessoa1 : Persona = {
    nome: 'Diego',
    idade: 21,
    corFavorita: Cores.AZUL
}

const pessoa2 : Persona = {
    nome: 'milena',
    idade: 24,
    corFavorita: Cores.ROSA
}

const pessoa3 : Persona = {
    nome: 'Antonio',
    idade: 23,
    corFavorita: Cores.AMARELO
}

console.log(pessoa1, pessoa2, pessoa3)