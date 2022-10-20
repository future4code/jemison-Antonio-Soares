type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) R:Para transformas em JS é só utilizar o comando "tsc nomeDoArquivo.ts". Toda vez que se altera o código,
//precisa rodar o comando novamente.

// c) R:Já esta na pasta src, então se estivesse fora mudaria apenas o caminho eu acho.