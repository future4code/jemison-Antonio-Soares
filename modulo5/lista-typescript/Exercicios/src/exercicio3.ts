type Persona = {
    nomeDoFilme: string,
    anoDeLancemento: number,
    generoDoFilme:GENERO,
    pontuacaoDoFilme:number
}


enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function Filmes (name:string,year:number,genre:any,punctuation?:number) {


    const filme : Persona = {
        nomeDoFilme: name,
        anoDeLancemento:year,
        generoDoFilme:genre,
        pontuacaoDoFilme:punctuation
    }

  return filme

}



console.log(Filmes("Velozes e Furiosos",2007,GENERO.ACAO,89))